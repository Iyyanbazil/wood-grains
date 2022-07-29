import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { BsCartPlus } from "react-icons/bs";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./productDetails.css";
const ProductDetails = ({ all }) => {
  
  const [imagesall, setimages] = useState("")
  const [quantity, setquantity] = useState(0);
  const { id } = useParams();
  const Navigate=useNavigate()
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
  const shop=()=>{
    Navigate(`/${id}/address`)
  }
  return (
    <>
      {/* <GoogleSlider /> */}
      {filterd.map((elem) => {
        return (
          <>
            <p className="detail-name">{elem.name}</p>
            <img className="detail-image" src={imagesall=== "" ? (elem.img):(imagesall)} />
            
<section className="more-images-detail">
<img src={elem.img} onClick={()=>{setimages(elem.img)}} />
<img src={elem.img1} onClick={()=>{setimages(elem.img1)}} />
<img src={elem.img2}  onClick={()=>{setimages(elem.img2)}} />
<img src={elem.img3} onClick={()=>{setimages(elem.img3)}} />
</section>
            <p className="detail-price">
              {/* <p>{imagesall}</p> */}
              Rs.<b>{elem.price}</b>
            </p>
            <p className="detail-desc">{elem.desc}</p>
          </>
        );
      })}
      <Rating
        name="read-only"
        value={value}
        readOnly
        className="rating-detail"
      />
      <p className="rating-detail">({value}/5 users)</p>
      <section className="quantity-section-main">
        <h3>Quantity:</h3>
        <div className="quatity-div-detail">
          {/* <BsPlusSquare className='add-icon-detail' onClick={increase}/> */}
          <div className="add-icon-detail">
          <p  onClick={increase}>
            +
          </p>
          </div>
         <div className="product-quantity">
          <p >{quantity}</p>
          </div>
          {/* <FiMinusSquare className='remove-icon-detail' onClick={decrease}/> */}
          <div className="remove-icon-detail">
          <p  onClick={decrease}>
          _
          </p>
          </div>
        </div>
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
      <section>
        <button className="add-to-cart-detail">
          Add to cart <BsCartPlus />
        </button>
        <button className="buying-detail" onClick={shop}>Continue Buying</button>
      </section>
    </>
  );
};

export default ProductDetails;
