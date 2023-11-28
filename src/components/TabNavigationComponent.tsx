import React from 'react';

function TabNavigation({ tabsMap, activeTab, handleTabClick, selectedOption }) {
  return (
    <div className="bg-blue-500 dark:bg-transparent justify-around dark:justify-between text-white dark:text-slate-600 flex text-base">
      {Object.entries(tabsMap).map(([tabId, tabText]) => (
        tabId !== selectedOption && tabId !== 'CUP' ? (
          <div
            key={tabId}
            className={`p-3 hover:cursor-pointer w-full ${activeTab === tabId ? ' bg-blue-600 dark:bg-transparent dark:text-white ' : ''}`}
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