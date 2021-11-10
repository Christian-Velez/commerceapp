


import React from 'react'
import { GridItem, FormLabel, Select, FormControl } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCountry, setActiveSubdivision } from '../../../actions/shipping';

const SelectCountry = () => {
   const dispatch = useDispatch()

   const { 
      Countries
   } = useSelector(state => state.shipping);

   const handleActiveCountryChange = (e) =>{
      dispatch(setActiveCountry(e.target.value));
      dispatch(setActiveSubdivision(null))
   }



   return (
      <GridItem colSpan={1}>

         <FormControl isRequired >

            <FormLabel> Shipping Country </FormLabel>

            <Select 
               variant='filled'
               onChange={ handleActiveCountryChange }
            >
               {
                  Countries.map(country => <option key={country.id} value= {country.id}>   {country.label} </option>)
               }
            </Select>

            
         </FormControl>
      </GridItem>

   )
}

export default SelectCountry
