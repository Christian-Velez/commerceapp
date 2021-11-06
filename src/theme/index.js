import {
   extendTheme,
   theme as base,
   withDefaultColorScheme,
   withDefaultVariant,
} from '@chakra-ui/react';


const inputSelectStyles = {
   sizes: {
      md: {
         field: {
            borderRadius: 'none',
         },
      },
   },

   variants: {
      filled: {
         field: {
            _focus : {
               borderColor: 'brand.200'
            }
         }
      }
   }
}

const theme = extendTheme(
   {
      colors: {
         brand: {
            50: `${base.colors.green[50]}`,
            100: `${base.colors.green[100]}`,
            200: `${base.colors.green[200]}`,
            300: `${base.colors.green[300]}`,
            400: `${base.colors.green[400]}`,
            500: `${base.colors.green[500]}`, // Brand color, default: green
            600: `${base.colors.green[600]}`,
            700: `${base.colors.green[700]}`,
            800: `${base.colors.green[800]}`,
            900: `${base.colors.green[900]}`,
         },
      },

      components: {
         Input: { ...inputSelectStyles },
         Select: { ...inputSelectStyles },
         IconButton: { 
            md: {
               field: {
                  borderRadius: 'none'
               }
            }
         }
        
      },
   },
   withDefaultColorScheme({
      colorScheme: 'brand',
      components: ['Checkbox'],
   }),
   withDefaultVariant({
      variant: 'filled',
      components: ['Input'],
   })
);

export default theme;
