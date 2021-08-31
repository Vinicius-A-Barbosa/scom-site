import { combineReducers } from 'redux';
import kilometerspage from '../../Features/KilometersPage/Redux/Reducer';
import trainspage from '../../Features/TrainsPage/Redux/Reducer';

const rootReducer = combineReducers({
    kilometersPage: kilometerspage,
    trainsPage: trainspage,
});

export default rootReducer;