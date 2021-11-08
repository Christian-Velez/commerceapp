
import { commerce } from '../lib/Commerce';

export const fetchProducts = async () => {
   const { data } = await commerce.products.list();
   

   return data;
}