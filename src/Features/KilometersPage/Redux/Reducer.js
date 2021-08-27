import { combineReducers } from 'redux';

import trainkm from '../Equipments/Train/Redux/Reducer';
import converterkm from '../Equipments/Converter/Redux/Reducer';
import bogiekm from '../Equipments/Bogie/Redux/Reducer';
import enginekm from '../Equipments/Engine/Redux/Reducer';
import axlekm from '../Equipments/Axle/Redux/Reducer';
import wheelkm from '../Equipments/Wheel/Redux/Reducer';

export default combineReducers({
    trainkm,
    converterkm,
    bogiekm,
    enginekm,
    axlekm,
    wheelkm,
});