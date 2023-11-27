import moment from 'moment';
import { useState } from 'react';

const DateRangeComponent = ({ranges, activeTab, handleTabClick, errorTab}) => {
    return (
        <div className="flex flex-row justify-between bg-white">
            {Object.entries(ranges).map(([rangeId, range]) => (
                <div
                    key={rangeId}
                    className={`p-3 hover:cursor-pointer w-full ${activeTab === rangeId ? ' bg-blue-400' : ''} ${errorTab === rangeId ? ' bg-red-400' : ''}`}
                    onClick={() => handleTabClick(rangeId)}
                >
                    {rangeId}
                    {/* {range[0].format('DD/MM/YYYY')} - {range[1].format('DD/MM/YYYY')} */}
                </div>
            ))}
        </div>
    )
}
export default DateRangeComponent;