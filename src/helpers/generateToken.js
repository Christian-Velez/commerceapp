import { commerce } from '../lib/Commerce';

export const generateToken = async (cart, navigate) => {
   try {
      const token =
         await commerce.checkout.generateToken(
            cart.id,
            { type: 'cart' }

         );

         return token;
   } catch (err) {
      navigate('/');

   }
};
