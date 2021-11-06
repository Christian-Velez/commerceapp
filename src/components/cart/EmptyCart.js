import {
   Text,
   VStack,
} from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const EmptyCart = () => {
   return (
      <VStack
         padding='2rem'
         width='full'
         alignItems='flex-start'
         spacing={3}
      >
         <Heading size='md'>
            YOUR SHOPPING CART IS EMPTY!
         </Heading>
         <Text>
            Before proceed to checkout you must
            add some products to your shopping
            cart
         </Text>
         <Link to='/'>
            <Text color='green.400'>
               Return to shop
            </Text>
         </Link>
      </VStack>
   );
};

export default EmptyCart;
