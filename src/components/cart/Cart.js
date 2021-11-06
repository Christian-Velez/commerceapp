import {
   Flex,
   Heading,
   HStack,
   VStack,
   Text,
   Divider,
   Stack,
   Button,
} from '@chakra-ui/react';
import React from 'react';
import EmptyCart from './EmptyCart';

const Cart = () => {
   const isEmpty = true;

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
               direction={{base:'column', lg:'row'}}
               width='full'
               mt='3rem'
               justifyContent='space-between'
               alignItems='flex-start'
            >
               <VStack
                  bgColor='gray.100'
                  width={{base:'full', lg:'65%'}}
               >
                  {isEmpty ? (
                     <EmptyCart />
                  ) : (
                     <h1>xd</h1>
                  )}
               </VStack>

               <VStack
                  bgColor='gray.50'
                  width={{base:'full', lg:'30%'}}
                  padding='2rem'
                  spacing={10}
                  alignItems='flex-start'
               >
                  <Heading size='md'>Order summary</Heading>
                  <HStack
                     width='full'
                     justifyContent='space-between'
                  >
                     <Text fontWeight='bold'>
                        Total
                     </Text>
                     <Text> $0</Text>
                  </HStack>
                  <Divider />

                  <Button 
                     disabled
                     borderRadius='0'
                     size='lg'
                     fontSize='md'
                     bgColor='green.200'
                     _hover={{bgColor:'green.300'}}
                     width='full'>
                     CONTINUE TO CHECKOUT
                  </Button>
               </VStack>
            </Stack>
         }
      </Flex>
   );
};

export default Cart;
