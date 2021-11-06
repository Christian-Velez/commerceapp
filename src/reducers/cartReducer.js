

import { types } from "../types/types";


const emptyCart = []

export const cartReducer = (state = emptyCart, action) =>{

   switch (action.type) {
      case types.setCart:
         return{
            ...state,
            cart: action.payload,

         }

      case types.addToCart:
         return {
            ...state,
            cart: action.payload,
         }
         
      default:
         return state;
   }
}