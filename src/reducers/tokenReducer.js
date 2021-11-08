
//Token for checkout

import { types } from "../types/types";


const initialToken = {};

export const tokenReducer = (state = initialToken, action) =>{
   switch (action.type) {

      case types.setToken:
         return {
            ...state,
            token: { ...action.payload},
         }
      
      default:
       return state;
   }
}