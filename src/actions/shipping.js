// Actions for shipping form in checkout section

import { fetchCountrySubdivisions } from '../helpers/fetchCountrySubdivisions';
import { fetchShippingCountries } from '../helpers/fetchShippingCountries';
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

         dispatch(setActiveCountry(arrCountries[0].id));
      };
   };

export const setActiveCountry = (country) => {
   return {
      type: types.setActiveCountry,
      payload: country,
   }
}



export const setSubdivisions = (subdivisions) => {
   return {
      type: types.setSubdivisions,
      payload: subdivisions,
   };
};

export const setActiveSubdivision = (activeSubdivision) => {
   return {
      type: types.setActiveSubdivision,
      payload: activeSubdivision,
   }
}

export const startSettingSubdivisions = (
   countryCode
) => {
   return async (dispatch, getState) => {

      const { token } = getState().token;
    

      const subdivisions = await fetchCountrySubdivisions(token.id, countryCode);


      const arrSubdivisions = Object.keys(
         subdivisions
      ).map((key) => ({
         id: key,
         label: subdivisions[key],
      }));

      dispatch(setSubdivisions(arrSubdivisions));
      dispatch(setActiveSubdivision(arrSubdivisions[0].id));

   };
};
