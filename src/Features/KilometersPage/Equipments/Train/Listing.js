import React, { useEffect } from 'react';
import Listing from '../../Common/Listing';

const TrainKilometers = ({ ...props }) => {
    const { loadTrainKms } = props;
    useEffect(() => {
        loadTrainKms();
    }, [loadTrainKms]);

    const { trainkm } = props;

    return(
        <Listing name="train" source={trainkm}/>
    );
}

export default TrainKilometers;