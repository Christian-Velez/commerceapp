import { fetchProducts } from '../helpers/fetchProducts';
import { types } from '../types/types';


//Products
export const startSettingProducts = () => {
   return async (dispatch) => {
      const products = await fetchProducts();
      dispatch(setProducts(products));
   };
};

export const setProducts = (products) => {
   return {
      type: types.chargeProducts,
      payload: products,
   };
};

