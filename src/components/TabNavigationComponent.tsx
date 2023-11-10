import React from 'react';
import '../stylesheets/TabView.css';

function TabNavigation({ tabsMap, activeTab, handleTabClick, selectedOption }) {
  return (
    <div className="tab-navigation">
      {Object.entries(tabsMap).map(([tabId, tabText]) => (
        tabId !== selectedOption && tabId !== 'CUP' ? (
          <div
            key={tabId}
            className={`tab ${activeTab === tabId ? 'active' : ''}`}
            onClick={() => handleTabClick(tabId)}
          >
            {tabText.toString()}
          </div>
        ) : null
      ))}
    </div>
  );
}


export default TabNavigation;