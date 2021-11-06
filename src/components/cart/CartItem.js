import React from 'react';
import {
   HStack,
   Box,
   Image,
   VStack,
   Text,
   IconButton,
   Select
} from '@chakra-ui/react';

import { HiOutlineTrash } from 'react-icons/hi';
import { startRemovingFromCart } from '../../actions/commerce';
import { useDispatch } from 'react-redux';
const CartItem = ({ product }) => {
   const dispatch = useDispatch();

   const handleDeleteItem = () =>{
      dispatch(startRemovingFromCart(product.id));
   }
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
               spacing={0}
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

               <Select>
                  
               </Select>
            </VStack>

            <IconButton
               aria-label='delete-item'
               icon={<HiOutlineTrash />}
               onClick={ () => { handleDeleteItem() }}
            ></IconButton>
         </HStack>
      </HStack>
   );
};

export default CartItem;
