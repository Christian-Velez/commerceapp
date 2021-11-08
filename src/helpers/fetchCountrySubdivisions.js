import { commerce } from '../lib/Commerce';

export const fetchCountrySubdivisions = async (
   token,
   countryCode
) => {
   const { subdivisions } =
      await commerce.services.localeListShippingSubdivisions(
         token,   
         countryCode
      );

   return subdivisions;
};
