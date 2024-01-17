import { useState } from 'react';
import Dashboard from './components/dashboard'; 
import ThemeContext from './Context/ThemeContext';
import StockContext from './Context/stockContext';
function App() {
  const [darkMode,setDarkMode] = useState(false);
  const [stockSymbol , setStockSymbol] = useState("GOOG");
  return (
    <ThemeContext.Provider value = {{darkMode , setDarkMode}}>
     <StockContext.Provider value = {{stockSymbol , setStockSymbol}}>
     <Dashboard />
     </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
