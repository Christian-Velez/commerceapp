import { types } from "../types/types";

const initialState = []


export const productReducer = (state = initialState, action) =>{
   switch (action.type) {
      case types.chargeProducts:
         return {
            ...state,
            products: action.payload,
         }
      
      default:
         return state;
   }
}