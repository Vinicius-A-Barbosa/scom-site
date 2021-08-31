import React from 'react';
import TrainPositions from './Train';
import './TrainsPage.scss';

const TrainsPage = () => {

    return (
        <div className="trainsPage">
            <div className="header"><h3>Trens</h3></div>
            <div className="body">
                <TrainPositions />
            </div>
        </div>
    );
}

export default TrainsPage;