export default function ComboBoxComponent ({ labelText, selectedOption, handleOptionChange, valuesMap, activeTab }) {
  return (
    <div className="relative m-2 flex">
      <div className="m-auto text-black dark:text-slate-400">
        <p>{labelText}</p> 
      </div>
      <div className="inset-y-0 right-0 flex items-center ml-auto">
        <select
          id="currency"
          name="currency"
          value={selectedOption}
            onChange={handleOptionChange}
          className="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-7 text-gray-500 dark:text-slate-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-md"
        >
          {Object.entries(valuesMap).map(([tabId, tabText]) => (
          tabId !== activeTab ? (
    <option key={tabId} value={tabId}>{tabText.toString()}</option>
          ) : null
  ))}
        </select>
      </div>
    </div>

  )
}
