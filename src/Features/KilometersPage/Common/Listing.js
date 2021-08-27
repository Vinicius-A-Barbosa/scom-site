import React from 'react';
import getShortDateAsNumbers from '../../../Utils/DateUtils';
import './Listing.scss';

const Listing = ({name, source}) => {
    const renderHeaders = () => (
        <div className="line">
            <div>Número de Série</div>
            <div>Data</div>
            <div>Km</div>
        </div>
    );

    const renderSkeleton = () => {
        const skeleton = [];
        for (let i = 0; i < 20; i += 1) {
            skeleton.push(
              <div key={`skeletonLine${i}`} className="line">
                <div className="skeleton-item" key={`${i}-1`} >
                    <div>
                    </div>
                </div>
                <div className="skeleton-item" key={`${i}-2`} >
                    <div>
                    </div>
                </div>
                <div className="skeleton-item" key={`${i}-3`} >
                    <div>
                    </div>
                </div>
              </div>,
            );
          }
          return skeleton;
    }

    const renderListingLine = () => {
        if (!source.loading) {
            return source.data.map(item => (
                <div className="line" key={`${item[`${name}Code`]}${item[`${name}DateKm`]}`}>
                    <div>{item[`${name}Code`]}</div>
                    <div>{getShortDateAsNumbers(item[`${name}DateKm`])}</div>
                    <div>{item[`${name}Km`]}</div>
                </div>
            ));
        } else {
            return renderSkeleton();
        }
    };

    return(
        <div className="kilometersListing">
            <div className="tableHeader">
                {renderHeaders()}
            </div>
            <div className="tableBody-wrapper">
                <div className="tableBody">
                    {renderListingLine()}
                </div>
            </div>
        </div>
    );
}

export default Listing;