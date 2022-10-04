import Navbars from './components/Navbar';
import './App.css';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Test from './components/test';
import Login from './components/login';
import Signup from "./components/Signup"
import ProductDetails from './components/productDetails';
import AddressPage from './components/AddressPage';
import AllProduct from './components/allProducts';
import axios from "axios"
import {useState,useEffect} from "react";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Cart from './components/Cart';
import API from "./components/API"
import {useDispatch,useSelector} from "react-redux"
import {loadAction} from "./Redux/loadingSlice"
import {CartActions} from "./Redux/cartSlice"
import DiscountPage from './components/DiscountPage';
function App() {
  const [AllProducts, setAllProducts] = useState([])
  const loading=useSelector((state)=>state.load.load)
  const [CartCount,setCartCount]=useState("0")
  const dispatch=useDispatch()
  // https://wood-grains.herokuapp.com/
useEffect(() => {
  const person=window.localStorage.getItem("user")
  const islogin=window.localStorage.getItem("islogin")
  const user=JSON.parse(person)
//  if(islogin==="true"){
//   const current=user._id

//  }
 const data= axios.get(API).then((res)=>{
  console.log(res.data);
  
  setAllProducts(res.data)
  if(res){
   dispatch(loadAction.change("true"))
 }
 })
 
 axios.get(`${API}count`).then((res)=>{
  console.log(res.data)
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
      <Route exact path="/header/:name" element={<SearchPage all={AllProducts}/>}/>
      <Route exact path="/trending/:name" element={<SearchPage all={AllProducts}/>}/>
      <Route exact path="/header/:name/:id" element={<ProductDetails all={AllProducts}/>}/>
      <Route exact path="/trending/:name/:id" element={<ProductDetails all={AllProducts}/>}/>
      <Route exact path="/search/:id" element={<ProductDetails all={AllProducts}/>}/>
      <Route exact path="/login" element={<Login all={AllProducts}/>}/>
      <Route exact path="/sign" element={<Signup all={AllProducts}/>}/>
      <Route exact path="/discount" element={<DiscountPage all={AllProducts} />} />
      <Route exact path="/:userID/cart" element={<Cart all={AllProducts}/>}/>
      <Route exact path="/:id" element={<ProductDetails all={AllProducts}/>}/>
      <Route exact path="/discount/:id" element={<ProductDetails all={AllProducts}/>}/>
      <Route exact path="/:id/address" element={<AddressPage all={AllProducts}/>}/>
      <Route exact path="/:userID/cart/:id" element={<ProductDetails all={AllProducts}/>}/>
    </Routes>
  </Router>
 {/* {/* <Home all={AllProducts}/> */}
  </>
  
  );
}

export default App;
