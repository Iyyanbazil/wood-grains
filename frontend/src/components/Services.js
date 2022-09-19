import React from "react";
import { useEffect } from "react";
import "./services.css";
import {useSelector} from "react-redux"
import { Skeleton } from "@mui/material";
import {Link,useNavigate} from "react-router-dom"
const Services = ({all}) => {
  const loading=useSelector((state)=>state.load.load)
  const navigate=useNavigate()
  // const navigater=()=>{

  // }
  // useEffect(() => {
  // console.log(all)
  // }, [])
  const detailer=(id)=>{
navigate(`/${id}`)
  }
  return (
    <>
     <div className="service-header">
        <h3>Product on Discount</h3>
       
 
      </div>
      <Link to="/discount" className="show-discount">Show more</Link>
    {loading==="true" ? (
      <>
  

      <div className="service-main"

      //  onClick={()=>{navigater()}}
       >
   {/* {all.map((curElem)=>{
      <p>{curElem.name}</p>
     })} */}
     
     {all.filter((curElem)=>curElem.discount===true).slice(2,5).map((elem,index)=>{
      return(
        <div>
          <img className="service-discount-img" src ={elem.img} onClick={()=>{detailer(elem._id)}} />
          <div className="service-disc-tag">
          <p>Discount on</p>
          </div>
          <p className="service-para">{elem.name}</p>

        </div>
        
      )
     })}

        {/* <section>
          <img className="service-discount-img" src="/images/dinning.jpg" />
          <div className="service-disc-tag">
          <p>Discount on</p>
          </div>
          <p className="service-para">Dinning</p>
        
        </section>

        <section >
          <img className="service-discount-img" src="/images/almirah.jpg" />
          <section className="service-disc-tag">
          <p>Discount on</p>
          </section>
          <p className="service-para">Almirah</p>

        </section>

        <section>
          <img className="service-discount-img" src="/images/dressing.jpg" />
          <section className="service-disc-tag">
          <p>Discount on</p>
          </section>
          <p className="service-para">Dressing</p>
        </section> */}
      </div>
      </>
    ):(
      <div className="skel-all-service">
      <Skeleton variant="rectangular" width={120} height={120} />
      <Skeleton variant="rectangular" width={120} height={120} />
      <Skeleton variant="rectangular" width={120} height={120} />
      
      </div>
    )}
      
    </>
  );
};

export default Services;
