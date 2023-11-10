import '../stylesheets/ComboBox.css'

function AndroidComboBox ({ selectedOption, handleOptionChange, valuesMap, activeTab }) {
  
  return (
    <div className="android-combobox">
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="android-select">
            {Object.entries(valuesMap).map(([tabId, tabText]) => (
              tabId !== activeTab ? (
        <option key={tabId} value={tabId}>{tabText.toString()}</option>
              ) : null
      ))}
      </select>
    </div>
  );
};

export default AndroidComboBox;