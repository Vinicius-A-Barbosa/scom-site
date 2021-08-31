import React, { useEffect, useState } from 'react';
import Listing from '../Common/Listing';
import './TrainPositions.scss';

const TrainPositions = ({ ...props }) => {
    const { loadTrainPositions } = props;

    const [currentPage, setCurrentPage] = useState(0);
    const [currentTrain, setCurrentTrain] = useState(null);

    useEffect(() => {
        loadTrainPositions(currentPage.toString());
    }, [loadTrainPositions, currentPage]);

    const { trainsPage } = props;
    console.log(trainsPage);
    return(
        <div className="trainPositions">
            <Listing
                source={trainsPage}
                currentTrain={currentTrain}
                setCurrentTrain={(value) => setCurrentTrain(value)}
            />
            <button type="button" onClick={() => setCurrentPage(currentPage + 1)}>
            CARREGAR
            </button>
        </div>
    );
}

export default TrainPositions;