import React, { useState } from 'react';
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

    const getCurrentEquipmentData = () => {
        return tabsList.find(item => item.id === currentEquipment).value;
    }

    return (
        <div className="kilometersPage">
            <div className="header"><h3>Quilometragem</h3></div>
            <div className="body">
                <div className="tabs">
                    <button type="button" className={`isClicked${currentEquipment==="Trem"}`} onClick={() => setCurrentEquipment("Trem")}>Trem</button>
                    <button type="button" className={`isClicked${currentEquipment==="Conversor"}`} onClick={() => setCurrentEquipment("Conversor")}>Conversor</button>
                    <button type="button" className={`isClicked${currentEquipment==="Truque"}`} onClick={() => setCurrentEquipment("Truque")}>Truque</button>
                    <button type="button" className={`isClicked${currentEquipment==="Motor"}`} onClick={() => setCurrentEquipment("Motor")}>Motor</button>
                    <button type="button" className={`isClicked${currentEquipment==="Eixo"}`} onClick={() => setCurrentEquipment("Eixo")}>Eixo</button>
                    <button type="button" className={`isClicked${currentEquipment==="Roda"}`} onClick={() => setCurrentEquipment("Roda")}>Roda</button>
                </div>
                {getCurrentEquipmentData()}
            </div>
        </div>
    );
}

export default KilometersPage;