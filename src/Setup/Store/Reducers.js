import { combineReducers } from 'redux';
import CounterReducer from '../../Common/BaseReduxApp/Counter/CounterSlice';

export default combineReducers({
    counter: CounterReducer,
});