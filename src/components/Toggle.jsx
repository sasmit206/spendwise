import { useState } from "react";

function Toggle() {
  const [isVeg, setIsVeg] = useState(false);
  const handleToggle = () => {
    setIsVeg(!isVeg);
  };

  return (
    <>
      <div className="flex items-center justify-center mt-6">
        <div
          onClick={handleToggle} className={`relative w-28 h-14 rounded-full cursor-pointer transition-colors duration-300 ${isVeg ? "bg-green-500" : "bg-red-500"}`}>
          <span
            className={`absolute left-1 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-semibold text-gray-700 transform transition-transform duration-300 ${isVeg ? "translate-x-14" : "translate-x-0"} whitespace-nowrap`}>
            {isVeg ? "Veg" : "Non-Veg"}
          </span>
        </div>
      </div>
    </>
  );
}

export default Toggle;
