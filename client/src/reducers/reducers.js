import { combineReducers } from 'redux';
import authReducer   from './authentification.reducer';

// Combine with other reducers we may add in the future
const ecommerceApp = combineReducers({
  authData: authReducer,
});

export default ecommerceApp;