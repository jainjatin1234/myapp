import "./App.css";
import "./css/style.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/layouts/Header";
import Home from "./component/Home";
import Footer from "./component/layouts/Footer";
import ProductDetails from "./component/product/ProductDetails";
import Cart from "./component/cart/Cart";
import Login from "./component/user/Login";
import Register from "./component/user/Register";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/action/UserAction";
import Profile from "./component/user/Profile";
import UpdateProfile from "./component/user/UpdateProfile";
import Shipping from "./component/cart/Shipping";
import ConfirmOrder from "./component/cart/ConfirmOrder";
import UpdatePassword from "./component/user/UpdatePassword";
import Payment from "./component/cart/Payment";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

   //apyment apikey get
   const [stripeApikey, setStripeApiKey] = useState('')

   async function getStripeApikey() {
     const {data} = await axios.get('/stripeapikey')
     setStripeApiKey(data.stripeApikey)
   }
   console.log(stripeApikey)

  useEffect(() => {
    dispatch(loadUser());
    getStripeApikey()
  }, [dispatch]);

 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Productdetail/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/updateprofile" element={<UpdateProfile/>}/>
        <Route path="/updatepasword" element={<UpdatePassword/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route  path="/order/confirm" element={<ConfirmOrder/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
