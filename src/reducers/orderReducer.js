import { types } from "../types/types";



const initialOrder = {
   order: {},
   error: '',
};


export const orderReducer = (state = initialOrder, action) => {

   switch(action.type){

      case types.setOrder:
         return{
            ...state,
            order: action.payload,
         }

      case types.setOrderError:
         return {
            ...state,
            error: action.payload,
         }



      default:
         return state;
   }

}