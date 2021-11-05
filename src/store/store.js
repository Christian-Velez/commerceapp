import {
   createStore,
   combineReducers,
   applyMiddleware,
   compose,
} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from '../reducers/cartReducer';
import { productReducer } from '../reducers/productReducer';



const allReducers = combineReducers({
   products: productReducer,
   cart: cartReducer,
});


const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;


export const store = createStore(
   allReducers,
   composeEnhancers(applyMiddleware(thunk)) //Redux dev tools y redux thunk
); 