
import { 
   Flex,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSettingProducts } from '../../actions/commerce'
import Product from './Product'




const Products = () => {
  
   const { products } = useSelector(state => state.products);

   


   return (
         <Flex
            width='80%'
            justifyContent='flex-start'
            flexWrap='wrap'
            margin='auto'
            marginTop='0'
         >
            {
               products
               ? products.map(product => (
                  <Product key={product.id} product={product}/>
               ))
               : <div>Loading...</div>
            }
            
         </Flex>
      
   )
}

export default Products;
