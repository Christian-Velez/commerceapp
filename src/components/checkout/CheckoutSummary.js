

import React from 'react'
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

   console.log(cart)

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
               <Text> $300 </Text>
            </HStack>
         </VStack>

         <Divider />
         <HStack
               width='full'
               justifyContent='space-between'
            >
               <Text fontWeight='bold' fontSize='md'>Total</Text>
               <Text> $xxx </Text>
            </HStack>

         <Button
            disabled={isCompleted}
            borderRadius='0'
            size='lg'
            fontSize='md'
            bgColor='brand.200'
            _hover={{
               bgColor: 'brand.300',
            }}
            width='full'
            // onClick = { ()=> { navigate('/checkout') }}
         >
            ALMOST DONE
         </Button>
      </VStack>
   )
}

export default CheckoutSummary
