

import { 
   VStack,
   Button,
   SimpleGrid,
   HStack,
   Heading,
} from '@chakra-ui/react'
import React from 'react'
import FormInput from './FormInput'

import {
   useForm,
   FormProvider,
} from 'react-hook-form';
import { useNavigate } from 'react-router';

import { Element, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';


const PaymentForm = ({back}) => {

   const { token } = useSelector(state => state.token);
   console.log(token)

   return (
      <VStack
      width={{
         base: 'full',
         lg: 'full',
      }}
      padding='1rem'
      alignItems='flex-start'
      justifyContent='center'
      bgColor='red'
      marginBottom='4rem'
      spacing={10}
   >

      
         <Button
             borderRadius='0'
             size='lg'
             fontSize='md'
             borderColor='brand.300'
             variant='outline'
             _hover={{
                bgColor: 'brand.50',
             }}
             width='full'
             onClick={ () => { back() }}
         > Back </Button>
         
         <Button type='submit'
             borderRadius='0'
             size='lg'
             fontSize='md'
             bgColor='brand.200'
             _hover={{
                bgColor: 'brand.300',
             }}
             width='full'
         > Pay </Button>

      
         

    
   </VStack>
   )
}

export default PaymentForm
