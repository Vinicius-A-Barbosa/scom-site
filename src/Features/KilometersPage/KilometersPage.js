import React, { useState } from 'react';
import Tabs from '../../Common/Tabs/Tabs';
import TrainKilometers from './Equipments/Train';
import ConverterKilometers from './Equipments/Converter';
import BogieKilometers from './Equipments/Bogie';
import EngineKilometers from './Equipments/Engine';
import AxleKilometers from './Equipments/Axle';
import WheelKilometers from './Equipments/Wheel';
import './KilometersPage.scss';

const KilometersPage = () => {

    const [currentEquipment, setCurrentEquipment] = useState('Trem');

    const tabsList = [
        { id: 'Trem', value: <TrainKilometers /> },
        { id: 'Conversor', value: <ConverterKilometers /> },
        { id: 'Truque', value: <BogieKilometers /> },
        { id: 'Motor', value: <EngineKilometers /> },
        { id: 'Eixo', value: <AxleKilometers /> },
        { id: 'Roda', value: <WheelKilometers /> },
    ];

    return (
        <div className="kilometersPage">
            <div className="header"><h3>Quilometragem</h3></div>
            <div className="body">
                <Tabs
                    tabsList={tabsList}
                    currentTab={currentEquipment}
                    setCurrentTab={(value) => setCurrentEquipment(value)}
                />
            </div>
        </div>
    );
}

export default KilometersPage;