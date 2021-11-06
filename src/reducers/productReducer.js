import { types } from "../types/types";

const initialState = {
   products: [],
   isAddingtoCart: false,
}


export const productReducer = (state = initialState, action) =>{
   switch (action.type) {
      case types.chargeProducts:
         return {
            ...state,
            products: action.payload,
         }
      
      case types.isAddingToCart:
         return {
            ...state,
            isAddingtoCart: action.payload,
         }
      default:
         return state;
   }
}