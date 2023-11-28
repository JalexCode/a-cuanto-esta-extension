
import { Tooltip } from 'react-tooltip';

const DateRangeComponent = ({ ranges, activeTab, handleTabClick, errorTab }) => {
    return (
        <div className="flex flex-row justify-between bg-white dark:bg-slate-700">
            {Object.entries(ranges).map(([rangeId, range]) => (
                <a data-tooltip-id={rangeId.toString()}
                data-tooltip-content={`Desde ${range.toString()} hasta hoy`}
                data-tooltip-place="top"
                key={rangeId}
                        className={`p-3 hover:cursor-pointer w-full text-black dark:text-slate-300 ${activeTab === rangeId ? ' bg-blue-400 dark:bg-slate-800 text-white dark:text-white font-bold' : ''} ${errorTab === rangeId ? ' bg-red-400  text-white' : ''}`}
                        onClick={() => handleTabClick(rangeId)}>
                    <Tooltip id={rangeId} />
                    {rangeId}
                    {/* {range[0].format('DD/MM/YYYY')} - {range[1].format('DD/MM/YYYY')} */}
                </a>
            ))}
        </div>
    )
}
export default DateRangeComponent;