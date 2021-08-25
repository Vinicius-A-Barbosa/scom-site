import React from 'react';
import './Tabs.scss';

const Tabs = ({ tabsList, currentTab, setCurrentTab }) => {

    const renderTabs = () => (
        tabsList.map(item => (
            <button
                type="button"
                className={`isClicked${currentTab===item.id}`}
                onClick={() => setCurrentTab(item.id)}
                key={`tab-button${item.id}`}
            >
                {item.id}
            </button>
        ))
    )

    const renderContent = () => {
        return tabsList.find(item => item.id === currentTab).value;
    }

    return (
        <div className="tabs">
            <div className="navigation">
                {renderTabs()}
            </div>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
}

export default Tabs;