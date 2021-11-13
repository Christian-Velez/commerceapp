


export const types = {
   
   chargeProducts: '[Product] Set all products from commerce.js',
   setCart: '[Cart] Set cart from commerce.js',
   updateCart: '[Cart] Action used to update cart. Includes add, remove, update',
   isAddingToCart: '[Product] Manage adding to cart state true/false',


   setCountries: '[Shipping] Get shipping countries from commerce.js',
   setActiveCountry: '[Shipping] Set active country',

   setSubdivisions: '[Shipping] Set subdivisions for each country selected',
   setActiveSubdivision: '[Shipping] Set active subdivision',


   setOptions: '[Shipping] Set shipping options',
   setActiveOption: '[Shipping] Set active option',

   restartAll: '[Shipping] Restart all',



   incrementStep: '[Checkout] Increment 1 to current step',
   decrementStep: '[Checkout] Decrement 1 to current step',
   setShippingData: '[Checkout] Set shipping data from address form',


   setOrder: '[Order] Set final order',
   setOrderError: '[Order] Set order error',


   

   setToken: '[Token] Set checkout token',
}