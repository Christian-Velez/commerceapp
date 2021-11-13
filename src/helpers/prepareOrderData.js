export const prepareOrderData = (
   token,
   shippingData,
   paymentMethod
) => ({
   line_items: token.live.line_items,
   customer: {
      firstname: shippingData.firstname,
      lastname: shippingData.lastname,
      email: shippingData.email,
   },
   shipping: {
      name: 'Primary Shipping',
      street: shippingData.address1,
      town_city: shippingData.city,
      county_state:
         shippingData.activeSubdivision,
      postal_zip_code: shippingData.zip,
      country: shippingData.activeCountry,
   },
   fulfillment: {
      shipping_method:
         shippingData.activeOption.id,
   },
   payment: {
      gateway: 'stripe',
      stripe: {
         payment_method_id: paymentMethod.id,
      },
   },
});
