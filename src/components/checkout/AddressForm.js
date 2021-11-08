import React, { useEffect } from 'react';
import {
   VStack,
   Button,
   SimpleGrid,

} from '@chakra-ui/react';
import {
   useForm,
   FormProvider,
} from 'react-hook-form';
import FormInput from './FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { startSettingShippingCountries, startSettingSubdivisions } from '../../actions/shipping';
import SelectCountry from './selects/SelectCountry';
import SelectSubdivision from './selects/SelectSubdivision';

const AddressForm = () => {
   const methods = useForm();
   const dispatch = useDispatch();

   const { 
      activeCountry, 
   } = useSelector(state => state.shipping);
  

   // Set all available countries when addressform charge.
   useEffect(() => {
      dispatch(startSettingShippingCountries());
   }, [dispatch]);


   // If the activeCountry changes, set again the new subdivisions
   useEffect(()=>{
      if (activeCountry) dispatch(startSettingSubdivisions(activeCountry));
   }, [activeCountry, dispatch])


   return (
      <VStack
         width={{
            base: 'full',
            lg: '65%',
         }}
         padding='1rem'
         alignItems='flex-start'
         marginBottom='4rem'
         spacing={10}
      >

         <FormProvider {...methods}>
         <form style={{width:'100%'}}>
            <VStack alignItems='flex-start'>
       
            <SimpleGrid columns={2} width='full' columnGap={3} rowGap={2}>
               <FormInput label='First name' name='first-name' colSpan={1} required />
               <FormInput label='Last name' name='last-name' colSpan={1} required />

               <FormInput label='Address' name='address' colSpan={2} required />
               <FormInput label='Email' name='email' colSpan={2} required />
               <FormInput label='City' name='city' colSpan={1} required />
               <FormInput label='ZIP / Postal code' colSpan={1} name='zip' required />
        
               <SelectCountry />
               <SelectSubdivision />
            


            </SimpleGrid>
            <Button type='submit'>Submit</Button>
                    
            </VStack>
           
         </form>

         </FormProvider>
      </VStack>
   );
};

export default AddressForm;
