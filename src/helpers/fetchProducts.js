

export const fetchProducts = async (commerce) => {
   const { data } = await commerce.products.list();
   

   return data;
}