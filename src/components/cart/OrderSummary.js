import React from 'react';
import {
   VStack,
   Heading,
   Text,
   Button,
   HStack,
   Divider,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const OrderSummary = () => {

   const navigate = useNavigate();

   const { cart } = useSelector(
      (state) => state.cart
   );

   const isEmpty = cart.line_items.length === 0;

  

   return (
      <VStack
         bgColor='gray.50'
         width={{
            base: 'full',
            lg: '30%',
         }}
         padding='2rem'
         spacing={10}
         alignItems='flex-start'
         position='sticky'
         top='3rem'
      >
         <Heading size='md'>
            Order summary
         </Heading>
        

         <Divider />
         <HStack
            width='full'
            justifyContent='space-between'
         >
            <Text fontWeight='bold'>Subtotal</Text>
            <Text> {cart.subtotal.formatted_with_symbol}</Text>
         </HStack>

         <Button
            disabled={isEmpty}
            borderRadius='0'
            size='lg'
            fontSize='md'
            bgColor='brand.200'
            _hover={{
               bgColor: 'brand.300',
            }}
            width='full'
            onClick = { ()=> { navigate('/checkout') }}
         >
            CONTINUE TO CHECKOUT
         </Button>
      </VStack>
   );
};

export default OrderSummary;
