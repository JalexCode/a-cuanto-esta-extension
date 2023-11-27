
import { Tooltip } from 'react-tooltip';

const DateRangeComponent = ({ ranges, activeTab, handleTabClick, errorTab }) => {
    return (
        <div className="flex flex-row justify-between bg-white">
            {Object.entries(ranges).map(([rangeId, range]) => (
                <a data-tooltip-id={rangeId.toString()}
                data-tooltip-content={`Desde ${range.toString()} hasta hoy`}
                data-tooltip-place="top"
                key={rangeId}
                        className={`p-3 hover:cursor-pointer w-full ${activeTab === rangeId ? ' bg-blue-400' : ''} ${errorTab === rangeId ? ' bg-red-400' : ''}`}
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