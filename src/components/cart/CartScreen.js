import {
   Flex,
   Heading,
   Stack,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';

const Cart = () => {
   return (
      <Flex
         width='80%'
         justifyContent='center'
         flexWrap='wrap'
         margin='auto'
         marginTop='0'
      >
         <Heading>Shopping cart</Heading>

         {
            <Stack
               direction={{
                  base: 'column',
                  lg: 'row',
               }}
               width='full'
               pt='3rem'
               justifyContent='space-between'
               alignItems='flex-start'
            >
               <CartItems/>
               <OrderSummary/>
            </Stack>
         }
      </Flex>
   );
};

export default Cart;
