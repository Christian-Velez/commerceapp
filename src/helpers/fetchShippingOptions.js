

import { commerce } from '../lib/Commerce';


export const fetchShippingOptions = async (checkoutTokenId, country, region = null) =>{

   const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region} );


   return options;
}