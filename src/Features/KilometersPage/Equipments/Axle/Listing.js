import React, { useEffect } from 'react';
import Listing from '../../Common/Listing';

const AxleKilometers = ({ ...props }) => {
    const { loadAxleKms } = props;
    useEffect(() => {
        loadAxleKms();
    }, [loadAxleKms]);

    const { axlekm } = props;

    return(
        <Listing name="axle" source={axlekm}/>
    );
}

export default AxleKilometers;