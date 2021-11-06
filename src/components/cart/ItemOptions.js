import React from 'react';
import { useSelector } from 'react-redux';

const ItemOptions = ({ item_id, quantity }) => {
   // Retorna 'x' options dependiendo del numero de productos de ese tipo disponibles

   const { products } = useSelector(
      (state) => state.products
   );
   const [{ inventory }] = products.filter(
      (subproduct) => subproduct.id === item_id
   );
   const { available } = inventory;

   var options = [];
   for (var i = 1; i <= available; i++) {
      options.push(
         <option key={i}> {i} </option>
      );
   }
   return options;
};

export default ItemOptions;
