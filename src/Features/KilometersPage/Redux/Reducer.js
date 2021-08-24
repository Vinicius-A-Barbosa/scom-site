import { combineReducers } from 'redux';

import trainkm, { reducerName as TRAIN_KM_DUCK_NAME } from '../Equipments/Train/Redux/Reducer';
import converterkm, { reducerName as CONVERTER_KM_DUCK_NAME } from '../Equipments/Converter/Redux/Reducer';
import bogiekm, { reducerName as BOGIE_KM_DUCK_NAME } from '../Equipments/Bogie/Redux/Reducer';
import enginekm, { reducerName as ENGINE_KM_DUCK_NAME } from '../Equipments/Engine/Redux/Reducer';
import axlekm, { reducerName as AXLE_KM_DUCK_NAME } from '../Equipments/Axle/Redux/Reducer';
import wheelkm, { reducerName as WHEEL_KM_DUCK_NAME } from '../Equipments/Wheel/Redux/Reducer';

export default combineReducers({
    [TRAIN_KM_DUCK_NAME]: trainkm,
    [CONVERTER_KM_DUCK_NAME]: converterkm,
    [BOGIE_KM_DUCK_NAME]: bogiekm,
    [ENGINE_KM_DUCK_NAME]: enginekm,
    [AXLE_KM_DUCK_NAME]: axlekm,
    [WHEEL_KM_DUCK_NAME]: wheelkm,
});