import React from 'react';
import { 
   VStack,
   FormControl,
   FormLabel,
   Input
} from '@chakra-ui/react';
import {
   useForm,
   FormProvider,
} from 'react-hook-form';

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
         <FormControl id='first-name' isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder='First name' bgColor='gray.100' />
         </FormControl>
      </VStack>
   );
};

export default AddressForm;
