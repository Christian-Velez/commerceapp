

import React, { useEffect, useState } from 'react'
import { 
   VStack,
   Heading,
   Divider,
   Button,
   HStack,
   Text, 


} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
const CheckoutSummary = () => {

   const isCompleted = true;

   const { cart } = useSelector(
      (state) => state.cart
   );

   const { activeOption } = useSelector(state => state.shipping);

  
  
   const formatNumber = (number) => (Math.round(number * 100) / 100).toFixed(2);
   


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
        

         <VStack spacing={0} width='full'>

            <HStack
               width='full'
               justifyContent='space-between'
            >
               <Text fontWeight='bold' fontSize='sm'>Order value</Text>
               <Text> {cart.subtotal.formatted_with_symbol}</Text>
            </HStack>

            <HStack
               width='full'
               justifyContent='space-between'
            >
               <Text fontWeight='bold' fontSize='sm'>Shipping</Text>
               <Text>  
               { 
                  activeOption.priceRaw && `$${ formatNumber(activeOption.priceRaw) }`
            
               } </Text>
            </HStack>
         </VStack>

         <Divider />
         <HStack
               width='full'
               justifyContent='space-between'
            >
               <Text fontWeight='bold' fontSize='md'>Total</Text>
               <Text>
               { 
                  activeOption.priceRaw && `$${ formatNumber(cart.subtotal.raw + activeOption.priceRaw) }`
            
               }
               </Text>
            </HStack>

        
      </VStack>
   )
}

export default CheckoutSummary
