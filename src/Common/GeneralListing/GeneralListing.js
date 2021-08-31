import React from 'react';
import './GeneralListing.scss';

const GeneralListing = ({loading, headers, content}) => {

    const renderHeaders = () => (
        <div className="line">
            {
                headers.map(item => (
                    <div key={item}>
                        {item}
                    </div>
                )) 
            }
        </div>
    );

    const renderItemSkeleton = (line) => {
        const numberOfColumns = headers.length;
        const skeleton = [];
        for (let i = 0; i < numberOfColumns; i += 1) {
            skeleton.push(
                <div className="skeleton-item" key={`${line}-${i}`} >
                    <div>
                    </div>
                </div>
            );
        }
        return skeleton;
    }

    const renderSkeleton = () => {
        const skeleton = [];
        for (let i = 0; i < 20; i += 1) {
            skeleton.push(
              <div key={`skeletonLine${i}`} className="line">
                {renderItemSkeleton(i)}
              </div>,
            );
          }
          return skeleton;
    }

    const renderListingLine = () => {
        if (!loading) {
            return content();
        } else {
            return renderSkeleton();
        }
    };

    return(
        <div className="generalListing">
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

export default GeneralListing;