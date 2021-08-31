import React from 'react';
import getShortDateAsNumbers from '../../../Utils/DateUtils';
import GeneralListing from '../../../Common/GeneralListing/GeneralListing';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import './Listing.scss';

const Listing = ({source, currentTrain, setCurrentTrain}) => {
    const headers = ["Trem", "Data", "Última Km", "Status", "Série", " "];

    const cars = ["MA", "MB", "RA", "RB"];

    const renderTrainPositions = (trainCode) => (
        <div className="content" key={`positions${trainCode}`}>
            {
                cars.map(item => (
                    <div key={item} className="carLine">
                        <div className="carPosition">
                            {item}
                        </div>
                    </div>
                ))
            }
        </div>
    );

    const renderListingLine = () => {
        if (!source.loading) {
            return source.data.map(item => (
                <div key={item.trainCode}>
                    <div className="line" key={`content${item.trainCode}`}>
                        <div>{item.trainCode}</div>
                        <div>{getShortDateAsNumbers(item.trainDateKm)}</div>
                        <div>{item.trainKm}</div>
                        <div>{item.trainAvailability}</div>
                        <div>{item.trainSerie}</div>
                        <ExpandMoreRoundedIcon
                            onClick={
                                currentTrain === item.trainCode
                                ? () => setCurrentTrain(null)
                                : () => setCurrentTrain(item.trainCode)
                            }
                        />
                    </div>
                    {currentTrain === item.trainCode ? renderTrainPositions(item.trainCode) : null}
                </div>
            ));
        } else {
            return null;
        }
    };

    return(
        <div className="trainsPageListing">
            <GeneralListing
                loading={source.loading}
                headers={headers}
                content={renderListingLine}
            />
        </div>
    );
}

export default Listing;