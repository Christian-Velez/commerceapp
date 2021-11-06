import React from 'react';

import { GridItem, FormControl, FormLabel, Input } from '@chakra-ui/react'

const FormInput = ({name, label, required, colSpan}) => {
   return (
      <GridItem colSpan={{base:2, lg:colSpan}}>
         <FormControl id={name} isRequired={required}>
            <FormLabel>{label}</FormLabel>
            <Input name={name}/>
         </FormControl>
      </GridItem>
   );
};

export default FormInput;
