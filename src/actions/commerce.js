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

//Cart
export const fetchCart = async () => {
   const items = await commerce.cart.retrieve();
   return items;
};

export const startSettingCart = () => {
   return async (dispatch) => {
      const cart = await fetchCart();
      dispatch(setCart(cart));
   };
};

export const setCart = (cart) => {
   return {
      type: types.setCart,
      payload: cart,
   };
};

export const updateCart = (cart) => {
   return {
      type: types.updateCart,
      payload: cart,
   };
};

export const startAddingToCart = (
   product_id,
   quantity
) => {
   return async (dispatch) => {
      const { cart } = await commerce.cart.add(
         product_id,
         quantity
      );
      dispatch(updateCart(cart));
   };
};

export const startUpdatingCartQty = (
   product_id,
   quantity
) => {
   return async (dispatch) => {
      const { cart } = await commerce.cart.update(
         product_id,
         { quantity }
      );
      dispatch(updateCart(cart));
   };
};

export const startRemovingFromCart = (
   product_id
) => {
   return async (dispatch) => {
      const { cart } = await commerce.cart.remove(
         product_id
      );
      dispatch(updateCart(cart));
   };
};
