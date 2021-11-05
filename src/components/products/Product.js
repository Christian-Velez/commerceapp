import React from 'react';
import {
   Text,
   VStack,
   Heading,
   HStack,
   Image,
   IconButton,
} from '@chakra-ui/react';

import { MdOutlineAddShoppingCart } from 'react-icons/md';

const Product = ({ product }) => {

   const { description, name, price } = product;

   return (
      <VStack
         spacing={5}
         margin={5}
         width={{base:'full', lg:'15rem'}}
      >
         <Image
            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202011?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603403462000'
            maxHeight='10rem'
         />

         <HStack
            width='full'
            h='5rem'
            maxH='5rem'
         >
            <VStack
               width='full'
               justify='flex-start'
               alignItems='flex-start'
               spacing='0'
               overflow='hidden'

            >
               <Heading size='sm'>{name}</Heading>
               <Text
                  

                  textOverflow='ellipsis'
                  dangerouslySetInnerHTML={  
                  {
                     __html: description,
                  }}
                  fontSize='sm'
               />
               
            </VStack>
         </HStack>

         <HStack width='full' justify='flex-end'>
         <Text fontWeight='bold'>
                  {price.formatted_with_code}{' '}
               </Text>
            <IconButton
               aria-label='add to cart'
               icon={<MdOutlineAddShoppingCart />}
            ></IconButton>
         </HStack>
      </VStack>
   );
};

export default Product;
