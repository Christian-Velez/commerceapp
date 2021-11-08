import React from 'react';
import {
   VStack,
   Button,
   SimpleGrid,
   Checkbox,
} from '@chakra-ui/react';
import {
   useForm,
   FormProvider,
} from 'react-hook-form';
import FormInput from './FormInput';

const AddressForm = () => {
   const methods = useForm();
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
       
            <SimpleGrid columns={2} width='full' columnGap={3}>
               <FormInput label='First name' name='first-name' colSpan={1} required />
               <FormInput label='Last name' name='last-name' colSpan={1} required />

               <FormInput label='Address' name='address' colSpan={2} required />
               <FormInput label='Email' name='email' colSpan={2} required />
               <FormInput label='City' name='city' colSpan={1} required />
               <FormInput label='ZIP / Postal code' colSpan={1} name='zip' required />
            </SimpleGrid>
        
            <Checkbox />
            <Button type='submit'>Submit</Button>
                    
            </VStack>
           
         </form>

         </FormProvider>
      </VStack>
   );
};

export default AddressForm;
