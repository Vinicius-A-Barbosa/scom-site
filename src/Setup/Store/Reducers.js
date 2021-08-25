import { combineReducers } from 'redux';
import kilometerspage from '../../Features/KilometersPage/Redux/Reducer';

const rootReducer = combineReducers({
    kilometersPage: kilometerspage,
});

export default rootReducer;