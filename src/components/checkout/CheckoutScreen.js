

import { Flex, Heading, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import AddressForm from './AddressForm';
import CheckoutSummary from './CheckoutSummary'
import Confirmation from './Confirmation';
import PaymentForm from './PaymentForm';

const steps = ['Shipping address', 'Payment details'];

const CheckoutScreen = () => {
   const [activeStep, setActiveStep] = useState(0);

   const Form = () => activeStep === 0
      ?  <AddressForm />
      :  <PaymentForm />

   return (
      <Flex
         width='80%'
         justifyContent='center'
         flexWrap='wrap'
         margin='auto'
         marginTop='0'
      >
         <Heading>Checkout</Heading>

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
               {
                  activeStep === steps.length ? <Confirmation /> : <Form />

               }
               <CheckoutSummary />
            </Stack>
      </Flex> 
   )
}

export default CheckoutScreen
