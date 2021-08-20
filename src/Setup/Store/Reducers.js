import { combineReducers } from 'redux';
import CounterReducer from '../../Common/BaseReduxApp/Counter/CounterSlice';

const rootReducer = combineReducers({
    counter: CounterReducer,
});

export default rootReducer;