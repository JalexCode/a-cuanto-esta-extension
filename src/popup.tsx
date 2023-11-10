import HeaderComponent from '~components/HeaderComponent';
import CurrenciesPricesComponent from './components/CurrenciesPricesComponent';
import './stylesheets/App.css'

function IndexPopup() {
  return (
    <div className="App">
      <header>
        <HeaderComponent/>
      </header>
      <body>
        <div>
          <CurrenciesPricesComponent/>
        </div>
      </body>
    </div>
  );
}

export default IndexPopup
