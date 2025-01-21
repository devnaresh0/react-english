import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Inputbox from "./components/index.js";

// Currency options (This is just an example, replace with actual options)
const currencyOptions = ["USD", "EUR", "GBP", "INR"];

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Swap currencies
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    convert(); // Recalculate conversion after swap
  };

  // Conversion logic (stub, replace with actual API call or conversion logic)
  const convert = () => {
    // Example conversion logic, you should replace it with real data or API call
    const conversionRate = 1.2; // Replace with real conversion rate logic
    setConvertedAmount(amount * conversionRate);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        background: `url(https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label={"From"}
                amount={amount}
                currencyOptions={currencyOptions}
                onCurrencyChange={setFromCurrency}
                onAmountChange={setAmount}
                selectedCurrency={fromCurrency}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapCurrencies}
              >
                Swap
              </button>
            </div>

            <div className="w-full mb-1">
              <Inputbox
                label={"To"}
                amount={convertedAmount}
                currencyOptions={currencyOptions}
                onCurrencyChange={setToCurrency}
                onAmountChange={setAmount}
                selectedCurrency={toCurrency}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
