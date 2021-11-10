// Actions for shipping form in checkout section

import { fetchCountrySubdivisions } from '../helpers/fetchCountrySubdivisions';
import { fetchShippingCountries } from '../helpers/fetchShippingCountries';
import { fetchShippingOptions } from '../helpers/fetchShippingOptions';
import { types } from '../types/types';

export const setShippingCountries = (
   countries
) => {
   return {
      type: types.setCountries,
      payload: countries,
   };
};

export const startSettingShippingCountries =
   () => {
      return async (dispatch, getState) => {

         const { token } = getState().token;

         const countries =
            await fetchShippingCountries(
               token.id
            );

         const arrCountries = Object.keys(
            countries
         ).map((key) => ({
            id: key,
            label: countries[key],
         }));

         dispatch(
            setShippingCountries(arrCountries)
         );

         dispatch(
            setActiveCountry(arrCountries[0].id)
         );
      };
   };

export const setActiveCountry = (activeCountry) => {
   return {
      type: types.setActiveCountry,
      payload: activeCountry,
   };
};

export const setSubdivisions = (subdivisions) => {
   return {
      type: types.setSubdivisions,
      payload: subdivisions,
   };
};

export const setActiveSubdivision = (
   activeSubdivision
) => {
   return {
      type: types.setActiveSubdivision,
      payload: activeSubdivision,
   };
};

export const startSettingSubdivisions = (
   countryCode
) => {
   return async (dispatch, getState) => {

      const { token } = getState().token;

      const subdivisions =
         await fetchCountrySubdivisions(
            token.id,
            countryCode
         );

      const arrSubdivisions = Object.keys(
         subdivisions
      ).map((key) => ({
         id: key,
         label: subdivisions[key],
      }));

      dispatch(setSubdivisions(arrSubdivisions));

      dispatch(
         setActiveSubdivision(
            arrSubdivisions[0].id
         )
      );
   };
};





export const setActiveOption = (activeOption) => {
   
   return {
      type: types.setActiveOption,
      payload: activeOption,
   }
}

export const setOptions = (options) => {
   return {
      type: types.setOptions,
      payload: options,
   };
};

export const startSettingOptions = (
   country,
   region
) => {
   return async(dispatch, getState) => {

      const { token } = getState().token;

      //options is an array
      
      const options = await fetchShippingOptions(
         token.id,
         country,
         region
      );

      const formattedOptions = options.map(op => ({
         id: op.id,
         label: `${op.description} - (${op.price.formatted_with_symbol})`,
         price: op.price.formatted_with_symbol,
         priceRaw: op.price.raw,
      }))



      dispatch(setOptions(formattedOptions));

      const activeOption = {
         id: formattedOptions[0].id,
         label: formattedOptions[0].label,
         priceRaw: formattedOptions[0].priceRaw
      }
      dispatch(setActiveOption(activeOption));
   };
};
