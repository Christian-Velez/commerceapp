

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

const Navbar = () => {

   const [isLgDevice] = useMediaQuery("(min-width: 62em)")

   return (
      <HStack 
         width='full'
         position='sticky'
         zIndex='1000'
         bgColor='white'  
         top='0'
         padding={3}
      >
         
         <HStack width='full'>
            <Icon
               as={FcLinux}
               w='2rem'
               h='2rem'
            />

            <Heading size='md'>Commerce.js</Heading>

         </HStack>

         <HStack width='full'
            justify='flex-end'
         >
         
            <Button
               leftIcon={<HiShoppingCart />}
            >
             <Text> { isLgDevice ? 'Shopping Bag (0)' : '(0)' } </Text>
            </Button>
         </HStack>
      </HStack>
   )
}

export default Navbar;
