import {
   VStack,
   Button,

   Heading,
} from '@chakra-ui/react';
import React from 'react';


import {
   Elements,
   CardElement,
   ElementsConsumer,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { prepareOrderData } from '../../../helpers/prepareOrderData';
import { startSettingOrder } from '../../../actions/order';

const PaymentForm = ({ back, shippingData, nextStep }) => {
   const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

   
   const { token } = useSelector(state => state.token);
   const dispatch = useDispatch();




   const handleSubmit = async (event, elements, stripe) =>{
      event.preventDefault();

      
      if(!stripe || !elements) return;      
      
      const cardElement = elements.getElement(CardElement);

      const { error  , paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card: cardElement,
      });


      if(error){
         // console.log(error)
      }
      else{
         const orderData = prepareOrderData(token, shippingData, paymentMethod);

         dispatch(startSettingOrder(token.id, orderData, nextStep));
      }
   }



   return (
      <VStack
         width={{base:'full', lg:'60%'}}
         padding='1rem'

         alignItems='flex-start'
         justifyContent='center'
         margin='auto'
         spacing={10}

         p={10}
      >
         <Heading size='md'>
            Payment method
         </Heading>

         <Elements stripe={stripePromise} >
            <ElementsConsumer>
               {({ elements, stripe }) => (
                  <form style={{width:'100%'}} onSubmit={(e)=> { handleSubmit(e, elements, stripe) }}>



                     <CardElement />

                     <VStack width='full' mt={5}>
                     
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
                        onClick={() => {
                           back();
                        }}
                     >
                        Back
                     </Button>

                     <Button
                        type='submit'
                        borderRadius='0'
                        disabled={!stripe}
                        size='lg'
                        fontSize='md'
                        bgColor='brand.200'
                        _hover={{
                           bgColor: 'brand.300',
                        }}
                        width='full'
                     >
                        Pay {  token.live.subtotal.formatted_with_symbol }
                     </Button>
                     </VStack>
                  </form>
               )}
            </ElementsConsumer>
         </Elements>
      </VStack>
   );
};

export default PaymentForm;
