import { useEffect, useState } from 'react';
import CurrenciesPricesPage from './components/CurrenciesPricesPage';
import AboutPage from './components/AboutPage'
import './stylesheets/styles.css'

function IndexPopup() {
  // dark mode
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  // pages
  const [currentPage, setCurrentPage] = useState("main")
  const pages = {
    main: <CurrenciesPricesPage handlePage={setCurrentPage} darkMode={darkMode} setDarkMode={setDarkMode}/>,
    about: <AboutPage handlePage={setCurrentPage} />
  }
  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className="App">
      {pages[currentPage]}
    </div>
  );
}

export default IndexPopup