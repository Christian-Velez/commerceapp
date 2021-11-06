import React, { useState } from 'react';
import {
   HStack,
   Box,
   Image,
   VStack,
   Text,
   IconButton,
   Select,
} from '@chakra-ui/react';

import { HiOutlineTrash } from 'react-icons/hi';
import {
   startRemovingFromCart,
   startUpdatingCartQty,
} from '../../actions/commerce';
import { useDispatch } from 'react-redux';
import ItemOptions from './ItemOptions';
const CartItem = ({ product }) => {
   const [selectValue, setSelectValue] = useState(
      product.quantity
   );
   const dispatch = useDispatch();

   const totalPrice = (
      Math.round(
         product.price.raw *
            product.quantity *
            100
      ) / 100
   ).toFixed(2);

   const handleDeleteItem = () => {
      dispatch(startRemovingFromCart(product.id));
   };

   const handleSelectChange = (e) => {
      const value = e.target.value;

      setSelectValue(value);
      dispatch(
         startUpdatingCartQty(product.id, value)
      );
   };

   return (
      <HStack
         width='full'
         justifyContent='space-between'
      >
         <Box
            bgColor='gray.200'
            width='9rem'
            height='9rem'
            display='flex'
            alignItems='center'
            justifyContent='center'
         >
            <Image src={product.image.url} />
         </Box>

         <HStack
            width='78%'
            alignItems='flex-start'
            justifyContent='space-between'
         >
            <VStack
               justifyContent='flex-start'
               alignItems='flex-start'
               height='8rem'
               spacing={1}
            >
               <Text fontWeight='bold'>
                  {product.name}
               </Text>
               <Text>
                  {
                     product.price
                        .formatted_with_symbol
                  }
               </Text>

               <Text fontSize='smaller'>
                  Total: ${totalPrice}
               </Text>

               <Select
                  value={selectValue}
                  onChange={handleSelectChange}
                  _focus={{borderColor: 'brand.200'}}
               >
                  <ItemOptions
                     item_id={product.product_id}
                  />
               </Select>
            </VStack>

            <IconButton
               alignSelf='flex-end'
               aria-label='delete-item'
               borderRadius='none'
               icon={<HiOutlineTrash />}
               onClick={() => {
                  handleDeleteItem();
               }}
            ></IconButton>
         </HStack>
      </HStack>
   );
};

export default CartItem;
