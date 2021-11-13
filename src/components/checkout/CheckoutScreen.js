import {
   Flex,
   Heading,
   Stack,
} from '@chakra-ui/react';
import React, {
   useEffect,
   useState,
} from 'react';
import {
   useDispatch,
   useSelector,
} from 'react-redux';
import { useNavigate } from 'react-router';
import { startSettingToken } from '../../actions/token';
import LoadingScreen from '../loading/LoadingScreen';
import AddressForm from './forms/AddressForm';
import Confirmation from './Confirmation';
import PaymentForm from './forms/PaymentForm';

const steps = [
   'Shipping address',
   'Payment details',
];

const CheckoutScreen = () => {

   
   
   
      
   const [activeStep, setActiveStep] = useState(0);
   const [shippingData, setShippingData] = useState({});
   const nextStep = () => setActiveStep(prevState => prevState + 1);
   const backStep = () => setActiveStep(prevState => prevState - 1);
   const next = (data) => {
      setShippingData(data);
      nextStep();
   }

   const dispatch = useDispatch();
   const { token } = useSelector(
      (state) => state.token
   );

   const Form = () =>
      activeStep === 0 ? (
         <AddressForm next = {next} />
      ) : (
         <PaymentForm back={backStep} shippingData={shippingData} nextStep={nextStep}/>
      );

   useEffect(() => {
      dispatch(startSettingToken());
   }, [dispatch]);

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
            {activeStep === steps.length ? (
               <Confirmation />
            ) : (
               token ?
               <Form />
               : <LoadingScreen />
            )}
         </Stack>
      </Flex>
   );
};

export default CheckoutScreen;
