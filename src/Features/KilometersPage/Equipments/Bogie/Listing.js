import React, { useEffect } from 'react';
import Listing from '../../Common/Listing';

const BogieKilometers = ({ ...props }) => {
    const { loadBogieKms } = props;
    useEffect(() => {
        loadBogieKms();
    }, [loadBogieKms]);

    const { bogiekm } = props;

    return(
        <Listing name="bogie" source={bogiekm}/>
    );
}

export default BogieKilometers;