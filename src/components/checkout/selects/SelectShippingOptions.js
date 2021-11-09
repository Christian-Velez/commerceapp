


import React from 'react';
import { 
   GridItem,
   FormControl,
   FormLabel,
   Select,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';

const SelectShippingOptions = () => {


   const { 
      Options
   } = useSelector(state => state.shipping);

   const handleActiveSubdivisionChange = () => {
      console.log('cambio ')
   }

   return (
      <GridItem colSpan={1}>

      <FormControl isRequired >

      <FormLabel> Shipping Subdivision </FormLabel>

         <Select 
            variant='filled'
            onChange={ handleActiveSubdivisionChange }
         >
            {/* {
               Options.map(option => <option key={option.id} value= {option.id}>   {option.label} </option>)
            } */}
         </Select>
      </FormControl>
   </GridItem>
   )
}

export default SelectShippingOptions
