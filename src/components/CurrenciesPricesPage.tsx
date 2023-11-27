import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TabNavigation from './TabNavigationComponent';
import ComboBoxComponent from './ComboBoxComponent';
import LoadingComponent from './LoadingComponent';
import ErrorComponent from './ErrorComponent';
import CardComponent from './CardComponent';
import DateRangeComponent from './DateRangeComponent';
import { format, subWeeks, subDays, subYears, subMonths } from 'date-fns';
import HeaderComponent from './HeaderComponent';

const URL = 'https://api.cambiocuba.money/api/v1/x-rates?';
const TOKEN = 'aCY78gC3kWRv1pR7VfgSlg';
const TODAY = new Date();

const currencyMap = {
  USD: 'USD 💵',
  MLC: 'MLC 💳',
  ECU: 'EUR 💶',
  CUP: 'CUP 🇨🇺'
};

const ranges = {
  '24H': format(subDays(TODAY, 1), 'yyyy-MM-dd'),
  '1S': format(subWeeks(TODAY, 1), 'yyyy-MM-dd'),
  '1M': format(subMonths(TODAY, 1), 'yyyy-MM-dd'),
  '1A': format(subYears(TODAY, 1), 'yyyy-MM-dd')       
}

function getFormmatedCurrentDate() {
  return format(TODAY, 'yyyy-MM-dd');
}

function getCurrentTime() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const secs = String(now.getSeconds()).padStart(2, '0');

  const formatted = `${hour}:${mins}:${secs}`;
  
  return formatted;
}

const CurrenciesPricesPage = () => {
  //
  const [error, setError] = useState<string>("");
  const [currencySalePrices, setCurrencySalePrices] = useState([]);
  const [currencyPurchasePrices, setCurrencyPurchasePrices] = useState([]);
  const [activeNavTab, setActiveNavTab] = useState(Object.keys(currencyMap)[0]);
  // date range tab navigation
  const firstTab = Object.keys(ranges)[0]
  const [dateFrom, setDateFrom] = useState<string>(ranges[firstTab]);
  const [activeDateRangeTab, setDateRangeTab] = useState<string>(firstTab);
  // date range error tab & handle
  const [dateRangeErrorTab, setDateRangeErrorTab] = useState<string>();
  const handleDateRangeTabClick = (tab: React.SetStateAction<string>) => {
      setDateRangeErrorTab("")
      setDateRangeTab(tab);
      setDateFrom(ranges[`${tab}`]);
  };  
  //
  const [selectedOption, setSelectedOption] = useState(Object.keys(currencyMap)[Object.keys(currencyMap).length - 1]);
  //
  const handleOptionChange = (event: { target: { value: any; }; }) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
  };
  //
  const [successFetchingSalePrices, setSuccessFetchingSalePrices] = useState(false);
  const [successFetchingPurchasePrices, setSuccessFetchingPurchasePrices] = useState(false);
  //
  const fetchData = async (offerType: string) => {
    // setup init
    setError("")
    offerType === "Venta" ? setCurrencySalePrices([]) : setCurrencyPurchasePrices([]);
    offerType === "Venta" ? setSuccessFetchingSalePrices(false) : setSuccessFetchingPurchasePrices(false)
    //
    try {        
      const response = await axios.get(
        URL,
        {
          params: {
            token: TOKEN,
            date_from: `${dateFrom} 00:00:00`,
            date_to: `${getFormmatedCurrentDate()} ${getCurrentTime()}`,
            offer: `${offerType}`            
          },
        }
      );
      const statistics = response.data.statistics;
      // setting data and updating flags
      offerType === "Venta" ? setCurrencySalePrices(statistics) : setCurrencyPurchasePrices(statistics);
      offerType === "Venta" ? setSuccessFetchingSalePrices(true) : setSuccessFetchingPurchasePrices(true)
    } catch (e) {
      console.error(`Error fetching currency [${offerType}] prices: `, e);
      setError(e.message)
      console.log(e.message)
      setDateRangeErrorTab(activeDateRangeTab)
    }
  };

  const fetchSaleDataByHook = () => {
    useEffect(() => {
      fetchData("Venta");
    }, [dateFrom]);
  }

  const fetchPurchaseDataByHook = () => {
    useEffect(() => {
      fetchData("Compra");
    }, [dateFrom]);
  }

  const getData = () => {
    console.log("GET DATA")
    fetchData("Venta");
    fetchData("Compra");
  }

  fetchSaleDataByHook();
  fetchPurchaseDataByHook();

  const currencySalePrice = currencySalePrices?.[activeNavTab]?.median;
  const currencyPurchasePrice = currencyPurchasePrices?.[activeNavTab]?.median;
  const saleMedianDiff = currencySalePrices?.[activeNavTab]?.median_diff ?? 0;
  const purchaseMedianDiff = currencyPurchasePrices?.[activeNavTab]?.median_diff ?? 0;
  //
  const exchangeSaleValue: Number = selectedOption === 'CUP' ? currencySalePrice : currencySalePrice / currencySalePrices?.[selectedOption]?.median;
  const exchangePurchaseValue: Number = selectedOption === 'CUP' ? currencyPurchasePrice : currencyPurchasePrice / currencyPurchasePrices?.[selectedOption]?.median;
  console.log(exchangeSaleValue, exchangePurchaseValue)
  //
  return (
    <div>
      <HeaderComponent handleRefresh={getData}/>
      <div className='justify-center w-full'>
        <DateRangeComponent 
          ranges={ranges} 
          activeTab={activeDateRangeTab} 
          handleTabClick={handleDateRangeTabClick} 
          errorTab={dateRangeErrorTab}
        />
      </div>
      {error ? (
        <ErrorComponent errorMessage={error} refresh={getData} />
      ) : (
        !successFetchingSalePrices && !successFetchingPurchasePrices ? 
          <LoadingComponent /> :
          <>
            <div className='transition duration-300 opacity-100'>
              <div className='justify-center w-full'>
                <ComboBoxComponent 
                  selectedOption={selectedOption} 
                  handleOptionChange={handleOptionChange} 
                  valuesMap={currencyMap} 
                  activeTab={activeNavTab} 
                />
              </div>
              {Number.isNaN(exchangeSaleValue) || Number.isNaN(exchangePurchaseValue) ? 
                <ErrorComponent errorMessage="Datos no disponibes" refresh={getData} /> :
                <div className='flex justify-between items-center gap-0 pt-4 pb-4'>
                  <CardComponent title={"Venta"} value={exchangeSaleValue} diff={saleMedianDiff} currency={selectedOption}/>
                  <CardComponent title={"Compra"} value={exchangePurchaseValue} diff={purchaseMedianDiff} currency={selectedOption}/>
                </div>
              }
            </div>
            <TabNavigation 
              tabsMap={currencyMap} 
              activeTab={activeNavTab} 
              handleTabClick={setActiveNavTab} 
              selectedOption={selectedOption} 
            />
          </>
      )}
    </div>
  );
};

export default CurrenciesPricesPage;