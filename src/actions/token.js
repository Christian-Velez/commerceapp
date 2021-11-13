import { generateToken } from "../helpers/generateToken";
import { types } from "../types/types";



export const startSettingToken = (navigate) =>{
   return ( async(dispatch, getState)=>{
      const { cart } = getState().cart;
      const token = await generateToken(cart, navigate);
      
      dispatch(setToken(token));
   })
}

export const setToken = (token) => {
   return {
      type: types.setToken,
      payload:  { ...token } ,
   }
}