import React, { useEffect } from 'react';
import Listing from '../Common/Listing';

const EngineKilometers = ({ ...props }) => {
    const { loadEngineKms } = props;
    useEffect(() => {
        loadEngineKms();
    }, [loadEngineKms]);

    const { enginekm } = props;

    return(
        <Listing name="engine" source={enginekm}/>
    );
}

export default EngineKilometers;