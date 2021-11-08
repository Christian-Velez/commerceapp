import { commerce } from '../lib/Commerce';
import { types } from '../types/types';


//Products
export const fetchProducts = async () => {
   const { data } =
      await commerce.products.list();
   return data;
};

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

