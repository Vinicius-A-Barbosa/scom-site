import { combineReducers } from 'redux';
import CounterReducer from '../../Common/BaseReduxApp/Counter/CounterSlice';
import kilometerspage from '../../Features/KilometersPage/Redux/Reducer';

const rootReducer = combineReducers({
    counter: CounterReducer,
    kilometersPage: kilometerspage,
});

export default rootReducer;