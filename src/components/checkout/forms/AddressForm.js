import React, { useEffect } from 'react';
import {
   VStack,
   Button,
   SimpleGrid,
   HStack,
   Stack,
   Heading,
} from '@chakra-ui/react';
import {
   useForm,
   FormProvider,
} from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { startSettingOptions , startSettingShippingCountries, startSettingSubdivisions } from '../../../actions/shipping';
import FormInput from './FormInput';
import SelectCountry from '../selects/SelectCountry';
import SelectSubdivision from '../selects/SelectSubdivision';
import SelectShippingOptions from '../selects/SelectShippingOptions';
import { useNavigate } from 'react-router';
import CheckoutSummary from '../CheckoutSummary';

const AddressForm = ({next}) => {

   const methods = useForm();
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { cart } = useSelector(
      (state) => state.cart
   );

   const isEmpty = cart.line_items.length === 0;

   const { 
      activeCountry, 
      activeSubdivision,
      activeOption,
   } = useSelector(state => state.shipping);
  

   // Set all available countries when addressform charges
   useEffect(() => {
      dispatch(startSettingShippingCountries());
   }, [dispatch]);


   // If the activeCountry changes, set again the new subdivisions
   useEffect(()=>{
      if (activeCountry) {
         dispatch(startSettingSubdivisions(activeCountry));
      }
   }, [activeCountry, dispatch])

   useEffect(()=>{
      if(activeSubdivision) {
         dispatch(startSettingOptions(activeCountry, activeSubdivision));

         }
   }, [activeSubdivision, activeCountry, dispatch]);



   return (

      <Stack 
         direction={{base:'column', lg:'row'}}
         width='full'
         alignItems='flex-start'
         justifyContent='space-between'
         
      >

      <VStack
         width={{base:'full', lg:'65%'}}
         alignItems='flex-start'
         marginBottom='4rem'
         spacing={10}
         >

         <FormProvider {...methods}>
         <form style={{width:'100%'}} onSubmit={methods.handleSubmit(data => next({
            ...data,
            activeCountry,
            activeSubdivision,
            activeOption,
         }))} >
            <VStack alignItems='flex-start'>
            
            <Heading size='md'> Shipping </Heading>
       
            <SimpleGrid columns={2} width='full' columnGap={3} rowGap={2}>

               <FormInput label='First name' name='firstname' colSpan={1} required methods={methods}/>
               <FormInput label='Last name' name='lastname' colSpan={1} required methods={methods}/>

               <FormInput label='Address' name='address1' colSpan={2} required methods={methods}/>
               <FormInput label='Email' name='email' colSpan={2} required methods={methods}/>
               <FormInput label='City' name='city' colSpan={1} required methods={methods}/>
               <FormInput label='ZIP / Postal code' colSpan={1} name='zip' required methods={methods}/>
        
               <SelectCountry />
               <SelectSubdivision />
               <SelectShippingOptions />
            


            </SimpleGrid>
            
            <HStack width='full'>

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
                  onClick={ () => { navigate('/cart') }}
                  > Back to cart</Button>
            
            <Button type='submit'
               disabled={isEmpty}
                borderRadius='0'
                size='lg'
                fontSize='md'
                bgColor='brand.200'
                _hover={{
                   bgColor: 'brand.300',
                  }}
                  width='full'
                  > Next </Button>
            </HStack>
            </VStack>
           
         
            

         </form>

         </FormProvider>
      </VStack>
      
            <CheckoutSummary />
                  
      </Stack>
   );
};

export default AddressForm;
