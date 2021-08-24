import React, { useEffect } from 'react';
import Listing from '../Common/Listing';

const WheelKilometers = ({ ...props }) => {
    const { loadWheelKms } = props;
    useEffect(() => {
        loadWheelKms();
    }, [loadWheelKms]);

    const { wheelkm } = props;

    return(
        <Listing name="wheel" source={wheelkm}/>
    );
}

export default WheelKilometers;