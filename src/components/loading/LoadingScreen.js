import { Flex } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React from 'react';

const LoadingScreen = () => {
   return (
      <Flex 
         justifyContent='center'
         alignItems='center'
          width='100vw' h='80vh'>
         <Spinner
            
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
         />
         
      </Flex>
   );
};

export default LoadingScreen;
