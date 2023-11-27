import React from 'react';
import '../stylesheets/TabView.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function TabNavigation({ tabsMap, activeTab, handleTabClick, selectedOption }) {
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      {Object.entries(tabsMap).map(([tabId, tabText]) => (
        tabId !== selectedOption && tabId !== 'CUP' ? (
          <div
            key={tabId}
            className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-green-700 ring-white/60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2 ${activeTab === tabId ? 'bg-white shadow'
              : 'text-green-100 hover:bg-white/[0.12] hover:text-white'}
            `}
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