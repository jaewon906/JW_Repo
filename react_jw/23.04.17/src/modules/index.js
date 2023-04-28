import {combineReducers} from 'redux';
import goodsReducer from './goodsReducer';
import stockReducer from './stockReducer';
import counter from '../practice/module/counter';

const rootReducer = combineReducers({
  goodsReducer,
  stockReducer,
  counter
})
export default rootReducer;