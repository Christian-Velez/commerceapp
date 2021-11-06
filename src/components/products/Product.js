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
import { startAddingToCart } from '../../actions/commerce';
import {
   useDispatch,
   useSelector,
} from 'react-redux';

const Product = ({ product }) => {
   const { id, description, name, price, image } =
      product;

   const { isAddingtoCart } = useSelector(
      (state) => state.products
   );
   const dispatch = useDispatch();

   const handleAddToCart = () => {
      dispatch(startAddingToCart(id, 1));
   };

   return (
      <VStack
         spacing={5}
         margin={5}
         width={{ base: 'full', lg: '15rem' }}
         justifyContent='space-between'
      >
         <Image
            src={image.url}
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
                  dangerouslySetInnerHTML={{
                     __html: description,
                  }}
                  fontSize='sm'
               />
            </VStack>
         </HStack>

         <HStack width='full' justify='flex-end'>
            <Text fontWeight='bold'>
               {price.formatted_with_symbol}
            </Text>
            <IconButton
               disabled={isAddingtoCart}
               aria-label='add to cart'
               icon={<MdOutlineAddShoppingCart />}
               borderRadius='none'
               onClick={() => {
                  handleAddToCart();
               }}
            ></IconButton>
         </HStack>
      </VStack>
   );
};

export default Product;
