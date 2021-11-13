

import { commerce } from "../lib/Commerce"
import { types } from "../types/types"
import { startRefreshingCart } from "./cart";




export const startSettingOrder = (checkoutTokenId, newOrder) => {
   return async(dispatch) => {
      
      try{
         const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);


         setOrder(incomingOrder);
         startRefreshingCart();

      }
      catch(error){
         console.log(error.data.error.message);
         
         // setOrderError(e);
      }

   }
}


export const setOrder = (orderData) => {
   return {
      type: types.setOrder,
      payload: orderData
   }
}

export const setOrderError = (e) => {
   return {
      type: types.setOrderError,
      payload: e,
      
   }
}