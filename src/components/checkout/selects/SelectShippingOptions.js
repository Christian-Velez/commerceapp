


import React from 'react';
import { 
   GridItem,
   FormControl,
   FormLabel,
   Select,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveOption } from '../../../actions/shipping';

const SelectShippingOptions = () => {
   const dispatch = useDispatch();

   const { 
      Options
   } = useSelector(state => state.shipping);

   const handleActiveOptionChange = (e) => {
      const objValue = JSON.parse(e.target.value);
      dispatch(setActiveOption(objValue));
   }


   return (
      <GridItem colSpan={1}>

      <FormControl isRequired >

      <FormLabel> Shipping Subdivision </FormLabel>

         <Select 
            variant='filled'
            onChange={ handleActiveOptionChange }
         >
            {
               Options.map(option => <option key={option.id} value= {JSON.stringify({id: option.id, label: option.label , priceRaw:option.priceRaw})}>   {option.label} </option>)
            }
         </Select>
      </FormControl>
   </GridItem>
   )
}

export default SelectShippingOptions
