import React from "react";
import "./services.css";
import {useSelector} from "react-redux"
import { Skeleton } from "@mui/material";
const Services = () => {
  const loading=useSelector((state)=>state.load.load)
  return (
    <>
     <div className="service-header">
        <h3>Product on Discount</h3>
       
      </div>
    {loading==="true" ? (
      <>
     

      <div className="service-main">
        <section>
          <img className="service-discount-img" src="/images/dinning.jpg" />
          <section className="service-disc-tag">
          <p>Discount on</p>
          </section>
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
        </section>
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
