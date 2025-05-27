import { createContext, useEffect, useState } from "react";
import { product } from "../assets/assets";
import {useNavigate} from "react-router-dom";

export const ShopContext= createContext();

const ShopContextProvider = (props)=> {


    const currency ='₹';
    const delivery_fee='10';
    const[cartItems,setCartItems]=useState({});
    const navigate= useNavigate();

    const addToCart= async(itemId)=>{
      let cartData= structuredClone(cartItems);
    if(cartData[itemId]){
      cartData[itemId] +=1;
    }
    else{
      cartData[itemId]={};
      cartData[itemId] =1;

    }
  setCartItems(cartData);}
   
  const getCartCount=()=>{
    let totalCount=0;
     for(const item in cartItems){
       totalCount+=cartItems[item];}
      return totalCount;
  }
   
  const updateQuantity= async(itemId,quantity)=>{
    let cartData= structuredClone(cartItems);
    cartData[itemId]=quantity;
    setCartItems(cartData);
  }


   const getCartAmount=()=>{
    let totalAmount=0;
    for(const items in cartItems){
      let itemInfo=product.find((product)=>product._id===items);
      if(cartItems[items]>0){
        totalAmount+=itemInfo.price * cartItems[items];
      }
    } return totalAmount;
   }



    const value={
         product, currency, delivery_fee,cartItems,addToCart,getCartCount, updateQuantity,getCartAmount,navigate
    }

    return(
  <ShopContext.Provider value={value}>
    {props.children}
  </ShopContext.Provider>

    )
}

export default ShopContextProvider;

