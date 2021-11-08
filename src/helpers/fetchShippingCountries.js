import { commerce } from '../lib/Commerce';

export const fetchShippingCountries = async (
   checkoutTokenId
) => {
   const { countries } =
      await commerce.services.localeListShippingCountries(
         checkoutTokenId
      );

   return countries;
};

