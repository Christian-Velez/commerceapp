import React from 'react';

import Product from './Product';

import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';


const Products = () => {



   const { products } = useSelector(
      (state) => state.products
   );

   return (
      <Flex
         width='80%'
         justifyContent='flex-start'
         flexWrap='wrap'
         margin='auto'
         marginTop='0'
      >
         {products.map((product) => (
            <Product
               key={product.id}
               product={product}
            />
         ))}
      </Flex>
   );
};

export default Products;
