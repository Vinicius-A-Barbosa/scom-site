import React, { useEffect } from 'react';
import Listing from '../Common/Listing';

const ConverterKilometers = ({ ...props }) => {
    const { loadConverterKms } = props;
    useEffect(() => {
        loadConverterKms();
    }, [loadConverterKms]);

    const { converterkm } = props;

    return(
        <Listing name="converter" source={converterkm}/>
    );
}

export default ConverterKilometers;