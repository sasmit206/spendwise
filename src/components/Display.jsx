import React from "react";

function Display({ items = [], budget }) {
  return (
    <section className="max-w-2xl mx-auto mt-8 p-6">
      {budget === "" ? (
        <p className="text-center text-gray-400">
          Enter an amount and click <strong>Get suggestions</strong>.
        </p>
      ) : items.length === 0 ? (
        <p className="text-center text-gray-400">
          No items within ₹{budget}. Try increasing the amount.
        </p>
      ) : (
        <>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((it) => (
              <li key={it.item} className="bg-neutral-800 p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <div className="font-medium text-gray-100">{it.item}</div>
                </div>
                <div className="text-gray-400">₹{it.price}</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default Display;
