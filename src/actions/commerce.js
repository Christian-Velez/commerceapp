

import { commerce } from '../lib/Commerce';
import { types } from '../types/types';

//Products
export const fetchProducts = async() =>{
   const { data } = await commerce.products.list();
   return data;
}

export const startSettingProducts = () => {
   return (async(dispatch) =>{
      const products = await fetchProducts();
      dispatch(setProducts(products));
   });
}

export const setProducts = (products) =>{
   return {
      type: types.chargeProducts,
      payload: products,
   }
}



//Cart
export const fetchCart = async() => {
   const items = await commerce.cart.retrieve();
   return items;
}

export const startSettingCart = () =>{
   return(async(dispatch)=>{
      const cart = await fetchCart();
      dispatch(setCart(cart));
   })
}

export const setCart = (cart) => {
   return {
      type: types.setCart,
      payload: cart,
   }
}

export const startAddingToCart = (product_id, quantity) => {
   return (async(dispatch)=>{
      
      const item = await commerce.cart.add(product_id,quantity);
      

      dispatch(addToCart(item.cart));
   })
}

export const addToCart = (cart) => {
   return {
      type: types.addToCart,
      payload: cart
   }

}