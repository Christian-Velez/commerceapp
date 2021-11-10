import { commerce } from '../lib/Commerce';

export const fetchCountrySubdivisions = async (
   checkoutTokenId,
   countryCode
) => {

   const  { subdivisions } =
      await commerce.services.localeListShippingSubdivisions(
         checkoutTokenId,   
         countryCode);

   return subdivisions;
};
