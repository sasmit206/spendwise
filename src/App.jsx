import { useState } from "react";
import Header from "./components/Header.jsx";
import Display from "./components/Display.jsx";
import foodItems from "./components/foodItems.js";

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

    const results = foodItems.filter((it) => it.price <= budget).sort((a, b) => a.price - b.price);
    setFilteredItems(results);
  };

  return (
    <div className="min-h-screen bg-slate-500 text-gray-100">
      <Header amount={amount} onAmountChange={handleAmountChange} onGetSuggestions={handleGetSuggestions}/>
      <Display items={filteredItems} budget={amount} />
    </div>
  );
}

export default App;
