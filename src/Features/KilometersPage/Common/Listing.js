import React from 'react';
import getShortDateAsNumbers from '../../../Utils/DateUtils';

const Listing = ({name, source}) => {
    const renderHeaders = () => (
        <div className="line">
            <div>Número de Série</div>
            <div>Data</div>
            <div>Km</div>
        </div>
    );

    const renderListingLine = () => {
        return source.data.map(item => (
            <div className="line" key={`${item[`${name}Code`]}${item[`${name}DateKm`]}`}>
                <div>{item[`${name}Code`]}</div>
                <div>{getShortDateAsNumbers(item[`${name}DateKm`])}</div>
                <div>{item[`${name}Km`]}</div>
            </div>
        ));
    };

    return(
        <div className="table">
            <div className="tableHeader">
                {renderHeaders()}
            </div>
            <div className="tableBody">
                {renderListingLine()}
            </div>
            
        </div>
    );
}

export default Listing;