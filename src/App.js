import React, { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import {
   startSettingCart,
   startSettingProducts,
} from './actions/commerce';

import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from 'react-router-dom';

import {
   useDispatch,
   useSelector,
} from 'react-redux';
import LoadingScreen from './components/loading/LoadingScreen';
import CartScreen from './components/cart/CartScreen';

const App = () => {
   // const handleAddtoCart = async(product_id, quantity) =>{
   //    const item = commerce.cart.add(product_id, quantity);
   //    setCart(item.cart);
   // }

   const { cart } = useSelector(
      (state) => state.cart
   );
   const { products } = useSelector(
      (state) => state.products
   );

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(startSettingProducts());
      dispatch(startSettingCart());
   }, [dispatch]);

   return (
      <div>
         {
            //Espera la carga del API
            cart && products ? (
               <Router>
                  <Navbar />

                  <div>
                     {/* Switch en router-dom v6.0 */}
                     <Routes>

                        <Route exact path='/' element={<Products/>}/>
                           

                        <Route exact path='/cart' element={<CartScreen/>}/>


                        {/* Replace to en router-dom v6.0 */}
                        <Route path='*' element={<Navigate replace to='/' />}/>

                     
                     </Routes>

                  </div>

               </Router>
            ) : (
               <LoadingScreen />
            )
         }
      </div>
   );
};

export default App;
