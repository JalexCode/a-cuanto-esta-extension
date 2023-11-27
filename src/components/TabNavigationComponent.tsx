import React from 'react';

function TabNavigation({ tabsMap, activeTab, handleTabClick, selectedOption }) {
  return (
    <div className="bg-blue-500 justify-around text-white flex text-base">
      {Object.entries(tabsMap).map(([tabId, tabText]) => (
        tabId !== selectedOption && tabId !== 'CUP' ? (
          <div
            key={tabId}
            className={`p-3 hover:cursor-pointer w-full ${activeTab === tabId ? ' bg-blue-600 border-t-4 border-t-slate-200' : ''}`}
            // border-t-4 border-t-white
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