import React from 'react';

import {
   VStack,
} from '@chakra-ui/react';
import EmptyCart from './EmptyCart';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
const CartItems = () => {
   const { cart } = useSelector(
      (state) => state.cart
   );

   const isEmpty = cart.line_items.length === 0;

   return (
      <VStack
         bgColor='gray.100'
         width={{
            base: 'full',
            lg: '65%',
         }}
         padding='1rem'
         alignItems='flex-start'
         marginBottom='4rem'
         spacing={10}
      >
         {isEmpty ? (
            <EmptyCart />
         ) : (
            cart.line_items.map((product) => (
               <CartItem key={product.id} product={product} />
            ))
         )}
      </VStack>
   );
};

export default CartItems;
