import React from 'react';
import {
   VStack,
   FormControl,
   FormLabel,
   Input,
   GridItem,
   SimpleGrid,
   Checkbox,
   Heading,
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
         padding='0 1rem'
         alignItems='flex-start'
         marginBottom='4rem'
         spacing={10}
      >
         
         <Heading size='md'> Shipping address </Heading>


         <SimpleGrid columns={2} columnGap={3} rowGap={3} w='full'>
            <FormInput label='First name' name='first-name' required colSpan={1}/>
            <FormInput label='Last name' name='last-name' required colSpan={1}/>
            <FormInput label='Address' name='address' required colSpan={2}/>
            <FormInput label='Email' name='email' required colSpan={2}/>
            <FormInput label='City' name='city' required colSpan={1}/>
            <FormInput label='ZIP / Postal code' name='zip' required colSpan={1}/>
         </SimpleGrid>
      </VStack>
   );
};

export default AddressForm;
