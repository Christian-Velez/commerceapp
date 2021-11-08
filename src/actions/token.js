import { generateToken } from "../helpers/generateToken";
import { types } from "../types/types";



export const startSettingToken = () =>{
   return ( async(dispatch, getState)=>{
      const { cart } = getState().cart;
      const token = await generateToken(cart);
      
      dispatch(setToken(token));
   })
}

export const setToken = (token) => {
   return {
      type: types.setToken,
      payload:  { ...token } ,
   }
}