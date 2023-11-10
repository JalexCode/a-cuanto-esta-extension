import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TabNavigation from './TabNavigationComponent';
import AndroidComboBox from './ComboBoxComponent';
import '../stylesheets/CurrenciesPrices.css'
import LoadingComponent from './LoadingComponent';
import ErrorComponent from './ErrorComponent';

const URL = 'https://api.cambiocuba.money/api/v1/x-rates?';
const TOKEN = 'aCY78gC3kWRv1pR7VfgSlg';

const currencyMap = {
  USD: 'USD💵',
  MLC: 'MLC💳',
  ECU: 'EUR💶',
  CUP: 'CUP🇨🇺'
};

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const date = `${year}-${month}-${day}`;

  return date;
}

function getCurrentTime() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const secs = String(now.getSeconds()).padStart(2, '0');

  const formatted = `${hour}:${mins}:${secs}`;

  return formatted;
}

const CurrenciesPricesComponent = () => {
  //
  const [error, setError] = useState<string>(null);
  const [currencySalePrices, setCurrencySalePrices] = useState([]);
  const [currencyPurchasePrices, setCurrencyPurchasePrices] = useState([]);
  const [activeTab, setActiveTab] = useState(Object.keys(currencyMap)[0]);
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  const [selectedOption, setSelectedOption] = useState(Object.keys(currencyMap)[Object.keys(currencyMap).length - 1]);

  const handleOptionChange = (event: { target: { value: any; }; }) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
  };

  const fetchDataByHook = () => {
    useEffect(() => {
      const fetchData = async () => {
        try {        
          const response = await axios.get(
            URL,
            {
              params: {
                token: TOKEN,
                date_from: `${getCurrentDate()} 00:00:00`,
                date_to: `${getCurrentDate()} ${getCurrentTime()}`,
                offer: 'Venta'              
              },
            }
          );
  
          setCurrencySalePrices(response.data.statistics);
        } catch (error) {
          console.error('Error fetching currency sale price: ', error);
          setError(error.message)
          console.log(error.message.toString())
        }
        //
        try {
          const response2 = await axios.get(
            URL,
            {
              params: {
                token: TOKEN,
                date_from: `${getCurrentDate()} 00:00:00`,
                date_to: `${getCurrentDate()} ${getCurrentTime()}`,
                offer: 'Compra'              
              },
            }
          );
  
          setCurrencyPurchasePrices(response2.data.statistics);
        } catch (error) {
          console.error('Error fetching currency purchase prices: ', error);
          setError(error.message.toString())
        }
      };
  
      fetchData();
    }, []);
  }

  fetchDataByHook();

  const currencySalePrice = currencySalePrices?.[activeTab]?.median
  const currencyPurchasePrice = currencyPurchasePrices?.[activeTab]?.median
  const saleMedianDiff = currencySalePrices?.[activeTab]?.median_diff ?? 0;
  const purchaseMedianDiff = currencyPurchasePrices?.[activeTab]?.median_diff ?? 0;
  //
  const exchangeSaleValue: Number = selectedOption === 'CUP' ? currencySalePrice : currencySalePrice / currencySalePrices?.[selectedOption]?.median
  const exchangePurchaseValue: Number = selectedOption === 'CUP' ? currencyPurchasePrice : currencyPurchasePrice / currencyPurchasePrices?.[selectedOption]?.median
  //
  if (error) {
    return <ErrorComponent errorMessage={error} />
  } else {
    return (
      <div className='currencies-window'>
        {exchangeSaleValue === undefined || exchangePurchaseValue === undefined ? 
          (<LoadingComponent/>) 
          : (
            <><div className='tabview-background'>
              <div className='row combo-box-container'>
                <p>Mostrar cambio en </p>
                <AndroidComboBox selectedOption={selectedOption} handleOptionChange={handleOptionChange} valuesMap={currencyMap} activeTab={activeTab} />
              </div>
              {!Number.isNaN(exchangeSaleValue) || !Number.isNaN(exchangePurchaseValue) ? 
              (<table>
                <tbody>
                  <tr>
                    <td>
                      <div className='text-row'>VENTA</div>
                    </td>
                    <td className={`right-align ${saleMedianDiff > 0 ? ' increasing-diff' : saleMedianDiff < 0 ? ' decreasing-diff' : ''}`}>
                      {exchangeSaleValue?.toFixed(2) ?? 'Cargando...'} {selectedOption}</td>
                    <td className='row'>
                      {saleMedianDiff > 0 ? '🔺' : saleMedianDiff < 0 ? '🔻' : ''}
                      <div className={`text-diff ${saleMedianDiff > 0 ? ' increasing-diff' : saleMedianDiff < 0 ? ' decreasing-diff' : ''}`}>
                        {saleMedianDiff > 0 ? '+' : ''}{saleMedianDiff !== 0 ? saleMedianDiff : ''} {selectedOption !== 'CUP' && saleMedianDiff > 0 ? 'CUP' : ''}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-row'>COMPRA</td>
                    <td className={`right-align ${purchaseMedianDiff > 0 ? ' increasing-diff' : purchaseMedianDiff < 0 ? ' decreasing-diff' : ''}`}>
                      {exchangePurchaseValue?.toFixed(2) ?? 'Cargando...'} {selectedOption}</td>
                    <td className='row'>
                      {purchaseMedianDiff > 0 ? '🔺' : purchaseMedianDiff < 0 ? '🔻' : ''}
                      <div className={`text-diff ${purchaseMedianDiff > 0 ? ' increasing-diff' : purchaseMedianDiff < 0 ? ' decreasing-diff' : ''}`}>
                        {purchaseMedianDiff > 0 ? '+' : ''}{purchaseMedianDiff !== 0 ? purchaseMedianDiff : ''} {selectedOption !== 'CUP' && purchaseMedianDiff > 0 ? 'CUP' : ''}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>)
              : (<ErrorComponent errorMessage="Datos no disponibes"/>)}
            </div><TabNavigation tabsMap={currencyMap} activeTab={activeTab} handleTabClick={handleTabClick} selectedOption={selectedOption} /></>
          )};
      </div>
    );
  }
};

export default CurrenciesPricesComponent;