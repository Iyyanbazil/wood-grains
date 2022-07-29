import Navbars from './components/Navbar';
import './App.css';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Test from './components/test';
import Login from './components/login';
import Signup from "./components/Signup"
import ProductDetails from './components/productDetails';
import AddressPage from './components/AddressPage';
import axios from "axios"
import {useState,useEffect} from "react";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Cart from './components/Cart';
import API from "./components/API"
function App() {
  const [AllProducts, setAllProducts] = useState([])
  // https://wood-grains.herokuapp.com/
useEffect(() => {
  const data= axios.get(API).then((res)=>{
   console.log(res.data);
   setAllProducts(res.data)
  })

 }, [])


  return (
  <>
  {/* <Test/> */}

  <Router>
      <Navbars/>
    <Routes>
      <Route exact path="/" element={<Home all={AllProducts} />}/>
      <Route exact path="/search" element={<SearchPage all={AllProducts}/>}/>
      <Route exact path="/login" element={<Login all={AllProducts}/>}/>
      <Route exact path="/sign" element={<Signup all={AllProducts}/>}/>
      <Route exact path="/cart" element={<Cart all={AllProducts}/>}/>
      <Route exact path="/:id" element={<ProductDetails all={AllProducts}/>}/>
      <Route exact path="/:id/address" element={<AddressPage all={AllProducts}/>}/>
    </Routes>
  </Router>
 {/* {/* <Home all={AllProducts}/> */}
  </>
  
  );
}

export default App;
