import React from 'react'
import { useState,useEffect } from "react";
import ProductDetailsDesktop from "./productDetailsDesktop"
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
const ProductDetails = ({ all }) => {
  const [imagesall, setimages] = useState("");
  const [quantity, setquantity] = useState("1");
    const [color,setcolor]=useState("")
  const [ides,setides]=useState({});
  const [spinner,setspinner]=useState(false);
  const [pres,setpres]=useState(false)
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
  const dispatch=useDispatch()
  const filterd = all.filter((elem) => elem._id === id);
  const value = 3;
  const increase = () => {
    setquantity(quantity + 1);
  };
  const decrease = () => {
    if (quantity > 0) {
      setquantity(quantity - 1);
    }
  };
  const shop = () => {
    const current=window.localStorage.getItem("user")
    setides(JSON.parse(current))
    const need=JSON.parse(current)
    const islogin=window.localStorage.getItem("islogin")

    if(islogin==="true"){
      if(quantity===""){
        alert("Please select quantity")
      }
      if(color===""){
        alert("Please select color")
      }
      if(quantity!=="" && color!==""){
        Navigate(`/${id}/address?q=${quantity}&c=${color}`);
      }
    }else{
      Navigate("/login")
    }
   
   
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
    <div className="mobile-view">
      {/* <GoogleSlider /> */}
      {filterd.map((elem) => {
        return (
          <>
            <p className="detail-name">{elem.name}</p>
            <img
              className="detail-image"
              src={imagesall === "" ? elem.img : imagesall}
            />
<p className="more-images">More Images</p>
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
            <p className="detail-price">
              {/* <p>{imagesall}</p> */}
              Price:<b>{elem.price}</b>Pkr
            </p>
            <p className="detail-desc">{elem.desc}</p>
            <Rating
        name="read-only"
        value={value}
        readOnly
        className="rating-detail"
      />
       <p className="rating-detail">({value}/5 users)</p>
      <section className="quantity-section-main quantity-section-main-mobile">
          <h3>Quantity:</h3>
          

            <select className='select-quantity' onChange={(e)=>setquantity(e.target.value)}>
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
          <label for="black" className={color==="black" ? ("active-color"):("disable-color")} onClick={()=>setcolor("black")}>Black</label>
          {/* <input name="black" type="radio" /> */}
        </div>
        <div>
          <label for="Brown" className={color==="brown" ? ("active-color"):("disable-color")} onClick={()=>setcolor("brown")}>Brown</label>
          {/* <input name="black" type="radio" /> */}
        </div>
        <div>
          <label for="white" className={color==="white" ? ("active-color"):("disable-color")} onClick={()=>setcolor("white")}>white</label>
          {/* <input name="black" type="radio" /> */}
        </div>
        <div>
        <label for="white">Custom</label>
        <input type="text" className="color-input" placeholder='#Color' onChange={(e)=>setcolor(e.target.value)}/>
        </div>
      </section>
      <section>
      <button  onClick={()=>{AddItem(elem._id)}}className="add-to-cart-detail">
            Add to cart <BsCartPlus />
          </button>
        <button className="buying-detail" onClick={shop}>
          Continue Buying
        </button>
      </section>
      
          </>
        );
      })}
     
     
      
      
</div>
<div className="details-desktop">
       <ProductDetailsDesktop  all={all}/>
      </div>
    </>
  );
};

export default ProductDetails;
