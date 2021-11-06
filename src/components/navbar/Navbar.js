

import React from 'react'
import { 
   HStack,
   Heading,
   Icon,
   Button,
   Text,
} from '@chakra-ui/react'
import {FcLinux } from 'react-icons/fc'
import { HiShoppingCart } from 'react-icons/hi'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Navbar = () => {

   const navigate = useNavigate();
   
   const [isLgDevice] = useMediaQuery("(min-width: 62em)");

   const { cart } = useSelector(state => state.cart);


   return (
      <HStack 
         width='full'
         position='sticky'
         zIndex='1000'
         bgColor='white'  
         top='0'
         padding={3}
      >
         <Link to='/'>

         
         <HStack width='full'>
            <Icon
               as={FcLinux}
               w='2rem'
               h='2rem'
            />

            <Heading size='md'>Commerce.js</Heading>

         </HStack>


         </Link>

         <HStack width='full'
            justify='flex-end'
         >
         
            <Button
               leftIcon={<HiShoppingCart />}
               onClick= { () => { navigate('/cart')}}
            >
             <Text> 
               { 
                  isLgDevice 
                  ? `Shopping Cart (${cart.total_items})` 
                  : `(${cart?.total_items})` 
               } 
             
             </Text>
            </Button>
         </HStack>
      </HStack>
   )
}

export default Navbar;
