import {
   createStore,
   combineReducers,
   applyMiddleware,
   compose,
} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from '../reducers/cartReducer';
import { orderReducer } from '../reducers/orderReducer';
import { productReducer } from '../reducers/productReducer';
import { shippingReducer } from '../reducers/shippingReducer';
import { tokenReducer } from '../reducers/tokenReducer';



const allReducers = combineReducers({
   products: productReducer,
   cart: cartReducer,
   shipping: shippingReducer,
   token: tokenReducer,
   order: orderReducer,
});


const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;


export const store = createStore(
   allReducers,
   composeEnhancers(applyMiddleware(thunk)) //Redux dev tools y redux thunk
); 