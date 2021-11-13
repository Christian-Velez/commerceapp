

import { commerce } from "../lib/Commerce"
import { types } from "../types/types"
import { startRefreshingCart } from "./cart";




export const startSettingOrder = (checkoutTokenId, newOrder, nextStep) => {
   return async(dispatch) => {
      
      nextStep();
      
      try{


         const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);


         dispatch(setOrder(incomingOrder));
         dispatch(startRefreshingCart());


      }
      catch(error){  
         dispatch(setOrderError(error.data.error.message));
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