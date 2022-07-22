import Navbars from './components/Navbar';
import './App.css';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Test from './components/test';
import Login from './components/login';
import Signup from "./components/Signup"
import axios from "axios"
import {useState,useEffect} from "react";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
function App() {
  const [AllProducts, setAllProducts] = useState([])
  // https://wood-grains.herokuapp.com/
useEffect(() => {
  const data= axios.get("http://localhost:8000/").then((res)=>{
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
      
    </Routes>
  </Router>
 {/* {/* <Home all={AllProducts}/> */}
  </>
  
  );
}

export default App;
