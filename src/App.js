

import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import { startSettingCart, startSettingProducts } from './actions/commerce'

import { useDispatch } from 'react-redux'

const App = () => {
   // const handleAddtoCart = async(product_id, quantity) =>{
   //    const item = commerce.cart.add(product_id, quantity);
   //    setCart(item.cart);
   // }



   const dispatch = useDispatch();

   useEffect(()=>{
      dispatch(startSettingProducts());
      dispatch(startSettingCart());
   },[dispatch]);

 
   return (
      <div>
         <Navbar />
         <Products />

      </div>
   )
}

export default App
