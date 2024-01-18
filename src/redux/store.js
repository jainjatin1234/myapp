import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { CategoryReducer } from "./reducer/CategoryReducer";
import { ProductdetailReducer, ProductReducer } from "./reducer/ProductReducer";
import { cartReducer } from "./reducer/Cartreducer";
import { userReducer, UserRegisterReducer } from "./reducer/UserReducer";
const reducer = combineReducers({
  c: CategoryReducer,
  p: ProductReducer,
  pdetail:ProductdetailReducer,
  cart:cartReducer,
  auth:UserRegisterReducer,
  user:userReducer,
});

let initialState = {
  cart: {
      cartItems: localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
          
      shippingInfo: localStorage.getItem("shippingInfo")
          ? JSON.parse(localStorage.getItem("shippingInfo"))
          : {},
  },
}

// middlewarethunk
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;



