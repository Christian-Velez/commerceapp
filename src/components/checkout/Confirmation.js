

import React from 'react'

import {
   VStack,
   Heading,
   Text,
   Button

} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../loading/LoadingScreen';
import { setOrderError } from '../../actions/order'

const Confirmation = () => {

   const navigate = useNavigate();
   const dispatch = useDispatch();
   
   const { order, error } = useSelector(state => state.order);







   const AllGood = () => (
      order.customer
      ?
       <VStack justifyContent='center' width='full'>
          <Heading size='sm'> Thank you for your purchase, { order.customer.firstname } </Heading>

          <Text> We sent an email to { order.customer.email }, check your inbox</Text>
          <Text> Order ref: { order.customer_reference } </Text>


          <Button 
               borderRadius='0'
               size='lg'
               fontSize='md'
               bgColor='brand.200'
               _hover={{
                  bgColor: 'brand.300',
               }}
               
               onClick={ () => { 
                  navigate('/');
               }}
          > Return to home </Button>

       </VStack>

       :
       <LoadingScreen />
   )


   const Error = () => (
      <VStack justifyContent='center' width='full'>
          <Heading size='sm'> An error has occured while processing your purchase </Heading>

          <Text color='red.500'> Error: { error } </Text>


          <Button 
            borderRadius='0'
            size='lg'
            fontSize='md'
            bgColor='brand.200'
            _hover={{
               bgColor: 'brand.300',
            }}
            
            onClick={ () => { 
               navigate('/')
               dispatch(setOrderError(''));
            }}
          > Return to home </Button>

       </VStack>

   )

   return (
         (
            error 
            ? <Error />
            : <AllGood />
         )


     
   )
}

export default Confirmation
