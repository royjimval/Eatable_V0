import { combineReducers } from 'redux';
import authReducer from './authReducer';
import itemReducer from './itemReducer';
import orderReducer from './orderReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import preorderReducer from './preorderReducer';
import id_orderReducer from './id_orderReducer';

import errorReducer from './errorReducer';
import registerReducer from './registerReducer'

import ingredientReducer from './ingredientsReducer';
import getuserReducer from './getuserReducer';

export default combineReducers({
  item: itemReducer,
  order : orderReducer,
  product : productReducer,
  category : categoryReducer,
  preorder : preorderReducer,
  id_order: id_orderReducer,

  auth: authReducer,
  users: getuserReducer,
  errors: errorReducer,
  rightRe: registerReducer,

  ingredients: ingredientReducer

});