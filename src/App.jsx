import { useState } from "react";
import Header from "./components/Header.jsx";
import Display from "./components/Display.jsx";
import Toggle from "./components/Toggle.jsx";
import foodItems from "./components/foodItems.js";
import "./App.css"; // make sure CSS is imported

function App() {
  const [amount, setAmount] = useState("");     
  const [filteredItems, setFilteredItems] = useState([]);

  const handleAmountChange = (value) => {
    if (value === "" || value === null) {
      setAmount("");
      return;
    }
    setAmount(value);
  };
  
  const handleGetSuggestions = () => {
    const budget = Number(amount);
    if (budget <= 0) {
      setFilteredItems([]);
      return;
    }

    const lowerLimit = budget * 0.85; 
    const upperLimit = budget * 1.15;  

    const results = foodItems
      .filter((it) => it.price >= lowerLimit && it.price <= upperLimit)
      .sort((a, b) => a.price - b.price);

    setFilteredItems(results);
  };

  const handleAddition = () => {
    if (Number(amount) > 490) {
      return;
    }
    setAmount(Number(amount) + 10);
  };

  const handleSubtraction = () => {
    if (Number(amount) < 10) {
      return;
    }
    setAmount(Number(amount) - 10);
  };

  return (
    <div className="min-h-screen bg-slate-500 text-gray-100 flex flex-col items-center">
      <Header 
        amount = {amount} 
        onAmountChange = {handleAmountChange} 
        onGetSuggestions = {handleGetSuggestions}
      />
      <Toggle />
      <Display items={filteredItems} budget={amount} />

      <div className="button-container">
        <button id="addition" onClick={handleAddition}> + </button>
        <button id="subtraction" onClick={handleSubtraction}> - </button>
      </div>
    </div>
  );
}

export default App;
