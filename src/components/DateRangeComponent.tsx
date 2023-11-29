
import { Tooltip } from 'react-tooltip';

const DateRangeComponent = ({ ranges, activeTab, handleTabClick, errorTab }) => {
    return (
        <div className="flex flex-row justify-between bg-white dark:bg-transparent">
            {Object.entries(ranges).map(([rangeId, range]) => (
                <a data-tooltip-id={rangeId.toString()}
                data-tooltip-content={`Desde ${range.toString()} hasta hoy`}
                data-tooltip-place="top"
                key={rangeId}
                        className={`p-3 hover:cursor-pointer w-full dark:w-fit dark:m-auto text-black dark:text-slate-300 ${activeTab === rangeId ? ' bg-blue-400 dark:bg-transparent dark:border-b-2 dark:border-b-slate-400 text-white dark:text-white font-bold' : ''} ${errorTab === rangeId ? ' bg-red-400 dark:bg-transparent text-white dark:text-red-400 dark:border-b-red-400' : ''}`}
                        onClick={() => handleTabClick(rangeId)}>
                    <Tooltip id={rangeId} />
                    {rangeId}
                </a>
            ))}
        </div>
    )
}
export default DateRangeComponent;