import React from "react";

function Header({ amount, onAmountChange, onGetSuggestions }) {
  const handleChange = (event) => {
    onAmountChange(event.target.value);
  };

  return (
    <header className="max-w-2xl mx-auto p-8 bg-neutral-900 rounded-2xl shadow-xl mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold font-mono text-center text-gray-100 leading-snug">
        Confused with how to spend your money for today?
        <br />
        <span className="text-lg font-normal text-gray-400">
          No worries, we'll help you with some food recommendations.
        </span>
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-6">
        <label htmlFor="amount" className="text-gray-200 font-medium text-lg">
          Enter the amount:
        </label>
        <input type="number" id="amount" step={"10"} value={amount} onChange={handleChange}
          className="w-44 bg-neutral-800 border border-gray-500 text-gray-100 rounded-lg px-4 py-2 text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition no-spinner"
        />

        <button onClick={onGetSuggestions}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:from-pink-600 hover:via-red-600 hover:to-orange-600 transition-transform transform hover:scale-105 active:scale-95"
        >
          Get suggestions
        </button>
      </div>
    </header>
  );
}

export default Header;
