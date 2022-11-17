import React,{useState} from 'react'
import "./header.css"
import Carousel from 'react-bootstrap/Carousel';
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
const Header = () => {
  const [index, setIndex] = useState(0);
const [cat,setcat]=useState("")
const navigate=useNavigate()
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);

  };
  const handleClick=(head)=>{
// if(cat==="home"){
navigate(`/header/${head}`)
// }
  }
  return (
  <>
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block  crousel-img"
          src="/images/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Furniture best for  Home</h3>
          <p>Best stock for the best house.New arrival on outlet</p>
          <section className='header-main-section-four'>
<button className='btn-shop' onClick={()=>{handleClick("house")}}>Shop Now </button>

    </section>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={1000}>
        <img
          className="d-block  crousel-img"
          src="/images/crousel 1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Looking  for Office use</h3>
          <p>Starting a startup.Wants to buy furniture.WELCOME</p>
          <section className='header-main-section-four'>
<button className='btn-shop' onClick={()=>{handleClick("office")}}>Shop Now </button>

    </section>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block  crousel-img"
          src="/images/crousel 2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Wants to taste Royality?</h3>
          <p>EveryOne is royal in dreams.Wants to be in real</p>
          <section className='header-main-section-four'>
<button className='btn-shop' onClick={()=>{handleClick("royal")}}>Shop Now </button>

    </section>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block crousel-img"
          src="/images/crousel 3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Modern Furniture available </h3>
          <p>For young blood.Amazing quality and asthetic designs</p>
          <section className='header-main-section-four'>
<button className='btn-shop' onClick={()=>{handleClick("modern")}}>Shop Now </button>

    </section>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  {/* <div className='header-main'>
    <section className='header-main-section-one'><span className='sale-span'>Winter Sale</span><span className='discount-span'>Get upto 20% discount</span></section>

    <section className='header-main-section-two'>
<h3><b>Select best furinture for your family </b></h3>

    </section>
  
  <section className='header-main-section-third'>
<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual </p>

    </section>
    <section className='header-main-section-four'>
<button className='btn-shop'>Shop Now </button>

    </section>
    </div> */}
  </>
  )
}

export default Header