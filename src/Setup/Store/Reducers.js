import { combineReducers } from 'redux';
import CounterReducer from '../../Common/BaseReduxApp/Counter/CounterSlice';
import trainkm, { reducerName as TRAIN_KM_DUCK_NAME } from '../../Features/KilometersPage/Train/Redux/Reducer';
import converterkm, { reducerName as CONVERTER_KM_DUCK_NAME } from '../../Features/KilometersPage/Converter/Redux/Reducer';
import bogiekm, { reducerName as BOGIE_KM_DUCK_NAME } from '../../Features/KilometersPage/Bogie/Redux/Reducer';
import enginekm, { reducerName as ENGINE_KM_DUCK_NAME } from '../../Features/KilometersPage/Engine/Redux/Reducer';
import axlekm, { reducerName as AXLE_KM_DUCK_NAME } from '../../Features/KilometersPage/Axle/Redux/Reducer';
import wheelkm, { reducerName as WHEEL_KM_DUCK_NAME } from '../../Features/KilometersPage/Wheel/Redux/Reducer';

const rootReducer = combineReducers({
    counter: CounterReducer,
    [TRAIN_KM_DUCK_NAME]: trainkm,
    [CONVERTER_KM_DUCK_NAME]: converterkm,
    [BOGIE_KM_DUCK_NAME]: bogiekm,
    [ENGINE_KM_DUCK_NAME]: enginekm,
    [AXLE_KM_DUCK_NAME]: axlekm,
    [WHEEL_KM_DUCK_NAME]: wheelkm,
});

export default rootReducer;