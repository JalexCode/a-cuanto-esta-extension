import { useState } from 'react';
import CurrenciesPricesPage from './components/CurrenciesPricesPage';
import AboutPage from './components/AboutPage'
import './stylesheets/styles.css'

function IndexPopup() {
  const [currentPage, setCurrentPage] = useState("main")
  const pages = {
    main: <CurrenciesPricesPage handlePage={setCurrentPage} />,
    about: <AboutPage handlePage={setCurrentPage} />
  }
  return (
    <div className="App">
      {pages[currentPage]}
    </div>
  );
}

export default IndexPopup