import { types } from '../types/types';
const initialShipping = {
   Countries: [],
   activeCountry: '',

   Subdivisions: [],
   activeSubdivision: '',

   Options: [],
   activeOption: '',
};

export const shippingReducer = (
   state = initialShipping,
   action
) => {
   switch (action.type) {

      case types.RestartAll : 
      return {
         ...state,
         shiping: initialShipping,
      }
      case types.setCountries:
         return {
            ...state,
            Countries: action.payload,
         };

      case types.setActiveCountry:
         return {
            ...state,
            activeCountry: action.payload,
         }

      case types.setSubdivisions:
         return {
            ...state,
            Subdivisions: action.payload,
         }

      case types.setActiveSubdivision:
         return {
            ...state,
            activeSubdivision: action.payload,
         }


      case types.setOptions:
         return {
            ...state,
            Options: action.payload,
         }
      
      case types.setActiveOption:
         return {
            ...state,
            activeOption: action.payload,
         }

      default:
         return state;
   }
};
