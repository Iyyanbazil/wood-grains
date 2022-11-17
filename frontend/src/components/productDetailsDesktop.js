import React from 'react'
import { useState,useEffect } from "react";
import axios from "axios";
import API from './API';
import {useDispatch,useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { BsCartPlus } from "react-icons/bs";
import {MdLocationPin} from "react-icons/md";
import {AiFillSafetyCertificate} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {CartActions} from "../Redux/cartSlice"
import {FcApproval} from "react-icons/fc"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import "./productDetails.css";
const ProductDetailsDesktop = ({all}) => {
    const [imagesall, setimages] = useState("");
    const [ides,setides]=useState({});
    const [pres,setpres]=useState(false);
    const [quantity, setquantity] = useState(0);
const [spinner,setspinner]=useState(false)
    useEffect(() => {
      const current=window.localStorage.getItem("user")
      setides(JSON.parse(current))
      const need=JSON.parse(current)
      const islogin=window.localStorage.getItem("islogin")
      if(islogin==="true"){
        var used=need._id
        console.log(used)
        const res=axios.post(`${API}count`,{user:used}).then((res)=>{
          console.log(res.data.msg)
          if(res){
            if(res.data.msg>0){
              dispatch(CartActions.setCount(res.data.msg))
             
            }
         
          }
        })
      }
  
    }, [,pres])
    useEffect(() => {
      
      setTimeout(() => {
        setpres(false);
      }, 3000);
    }, [pres])
    const { id } = useParams();
    const Navigate = useNavigate();
    const filterd = all.filter((elem) => elem._id === id);
    const value = 3;
   
    const dispatch=useDispatch()
const loading=useSelector((state)=>state.load.load)
    
    const shop = () => {
      Navigate(`/${id}/address`);
    };


    const AddItem=async(pro)=>{
      setspinner(true)
      const islogin=window.localStorage.getItem("islogin")
      if(islogin==="true"){
        const data= await axios.post(`${API}`,{id:pro,userAdd:ides._id})
        if(data){
          console.log("from get")
          console.log(data.data.msg)
          dispatch(CartActions.setCount(data.data.msg))
          setspinner(false)
          setpres(true)
        }
      }else{
        Navigate(`/login`)
      }
    
    
     }
    return (
      <>
      <div className={pres ? ("alert-div-active"):("alert-div-closed")}>
<p>Added to Cart <FcApproval size="2rem"/></p>
    </div>
    <div className={spinner ? ("active-spinner"):("disable-spinner")}>
    <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
</Button>{' '}
    </div>
        {/* <GoogleSlider /> */}
        {filterd.map((elem) => {
          return (
            <>
              <p className="detail-name">{elem.name}</p>
              <img
                className="detail-image"
                src={imagesall === "" ? elem.img : imagesall}
              />
  
              <section className="more-images-detail">
                <img
                  src={elem.img}
                  onClick={() => {
                    setimages(elem.img);
                  }}
                />
                <img
                  src={elem.img1}
                  onClick={() => {
                    setimages(elem.img1);
                  }}
                />
                <img
                  src={elem.img2}
                  onClick={() => {
                    setimages(elem.img2);
                  }}
                />
                <img
                  src={elem.img3}
                  onClick={() => {
                    setimages(elem.img3);
                  }}
                />
              </section>
              <div className='deatil-grid'>
              
              <div className='rating-div'>
                <h3 className='desc-heading'>Description:</h3>
              <p className="detail-desc">{elem.desc}</p>
        <Rating
          name="read-only"
          value={value}
          readOnly
          className="rating-detail"
        />
        <p className="rating-detail">({value}/5 users)</p>
        <section className="quantity-section-main">
          <h3>Quantity:</h3>
          

            <select className='select-quantity'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              </select>
          {/* </div> */}
        </section>
        <section className="color-selection-detail">
          <h3>Select Color</h3>
          <div>
            <label for="black">Black</label>
            <input name="black" type="radio" />
          </div>
          <div>
            <label for="Brown">Brown</label>
            <input name="black" type="radio" />
          </div>
          <div>
            <label for="white">white</label>
            <input name="black" type="radio" />
          </div>
        </section>
        </div>
              <div className='price-btn-div'>
              <p className="detail-price">
                
                Price:<b>{elem.price}</b>Pkr
              </p>
              <section className='deatils-btn'>
          <p><MdLocationPin/>Deliverd All over pakistan</p>
          <h4 className='stock'>In Stock</h4>
          <p className='saftey'>The product will be deliverd with full protection at your doorstep</p>
          <button  onClick={()=>{AddItem(elem._id)}}className="add-to-cart-detail">
            Add to cart <BsCartPlus />
          </button>
          <br/>
          <button className="buying-detail" onClick={shop}>
            Continue Buying
          </button>
          <p><AiFillSafetyCertificate/>Secure Payment</p>
          <p className='return-policy'>10 Days Return Policy</p>
        </section>
        
              </div>
              
             
              </div>
            </>
          );
        })}
        
      </>
    );
  };

export default ProductDetailsDesktop