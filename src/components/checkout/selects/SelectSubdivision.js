


import React from 'react'

import { GridItem, FormControl, FormLabel, Select } from '@chakra-ui/react'
import { setActiveSubdivision } from '../../../actions/shipping';
import { useDispatch, useSelector } from 'react-redux';

const SelectSubdivision = () => {

   const dispatch = useDispatch()

   const { 
      Subdivisions
   } = useSelector(state => state.shipping);

   const handleActiveSubdivisionChange = (e) =>{
      dispatch(setActiveSubdivision(e.target.value));
   }




   return (
      
      <GridItem colSpan={1}>

      <FormControl isRequired >

      <FormLabel> Shipping Subdivision </FormLabel>

         <Select 
            variant='filled'
            onChange={ handleActiveSubdivisionChange }
         >
            {
               Subdivisions.map(subdivision => <option key={subdivision.id} value= {subdivision.id}>   {subdivision.label} </option>)
         
            }
         </Select>
      </FormControl>
   </GridItem>
   )
}

export default SelectSubdivision
