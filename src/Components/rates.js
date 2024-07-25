// // // // pages/index.js

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const ExchangeRates = () => {
// // //   const [rates, setRates] = useState({});
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchRates = async () => {
// // //       try {
// // //         const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
// // //         setRates(response.data.rates);
// // //         setLoading(false);
// // //       } catch (err) {
// // //         setError(err.message);
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchRates();
// // //   }, []);

// // //   if (loading) return <div>Loading...</div>;
// // //   if (error) return <div>Error: {error}</div>;

// // //   return (
// // //     <div>
// // //       <h1>Exchange Rates</h1>
// // //       <table>
// // //         <thead>
// // //           <tr>
// // //             <th>Currency</th>
// // //             <th>Rate</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {Object.keys(rates).map((currency) => (
// // //             <tr key={currency}>
// // //               <td>{currency}</td>
// // //               <td>{rates[currency]}</td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default ExchangeRates;

// // // pages/index.js

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const ExchangeRates = () => {
// //   const [rates, setRates] = useState({});
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [fromCurrency, setFromCurrency] = useState('USD');
// //   const [toCurrency, setToCurrency] = useState('EUR');
// //   const [amount, setAmount] = useState(1);
// //   const [result, setResult] = useState(null);

// //   useEffect(() => {
// //     const fetchRates = async () => {
// //       try {
// //         const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
// //         setRates(response.data.rates);
// //         setLoading(false);
// //       } catch (err) {
// //         setError(err.message);
// //         setLoading(false);
// //       }
// //     };

// //     fetchRates();
// //   }, []);

// //   const handleConvert = () => {
// //     if (rates[fromCurrency] && rates[toCurrency]) {
// //       const rate = rates[toCurrency] / rates[fromCurrency];
// //       setResult(rate * amount);
// //     }
// //   };

// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>Error: {error}</div>;

// //   return (
// //     <div>
// //       <h1>Currency Converter</h1>
// //       <div>
// //         <label>
// //           Amount:
// //           <input
// //             type="number"
// //             value={amount}
// //             onChange={(e) => setAmount(e.target.value)}
// //           />
// //         </label>
// //         <label>
// //           From:
// //           <select
// //             value={fromCurrency}
// //             onChange={(e) => setFromCurrency(e.target.value)}
// //           >
// //             {Object.keys(rates).map((currency) => (
// //               <option key={currency} value={currency}>
// //                 {currency}
// //               </option>
// //             ))}
// //           </select>
// //         </label>
// //         <label>
// //           To:
// //           <select
// //             value={toCurrency}
// //             onChange={(e) => setToCurrency(e.target.value)}
// //           >
// //             {Object.keys(rates).map((currency) => (
// //               <option key={currency} value={currency}>
// //                 {currency}
// //               </option>
// //             ))}
// //           </select>
// //         </label>
// //         <button onClick={handleConvert}>Convert</button>
// //       </div>
// //       {result && (
// //         <div>
// //           <h2>Result</h2>
// //           <p>
// //             {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
// //           </p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ExchangeRates;

// // pages/index.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const ExchangeRates = () => {
//   const [rates, setRates] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [fromCurrency, setFromCurrency] = useState('USD');
//   const [toCurrency, setToCurrency] = useState('EUR');
//   const [amount, setAmount] = useState(1);
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     const fetchRates = async () => {
//       try {
//         const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
//         setRates(response.data.rates);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchRates();
//   }, []);

//   const handleConvert = () => {
//     if (rates[fromCurrency] && rates[toCurrency]) {
//       const rate = rates[toCurrency] / rates[fromCurrency];
//       setResult(rate * amount);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="card">
//       <h1>Currency Converter</h1>
//       <div>
//         <label>
//           Amount:
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </label>
//         <label>
//           From:
//           <select
//             value={fromCurrency}
//             onChange={(e) => setFromCurrency(e.target.value)}
//           >
//             {Object.keys(rates).map((currency) => (
//               <option key={currency} value={currency}>
//                 {currency}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label>
//           To:
//           <select
//             value={toCurrency}
//             onChange={(e) => setToCurrency(e.target.value)}
//           >
//             {Object.keys(rates).map((currency) => (
//               <option key={currency} value={currency}>
//                 {currency}
//               </option>
//             ))}
//           </select>
//         </label>
//         <button onClick={handleConvert}>Convert</button>
//       </div>
//       {result && (
//         <div className="result">
//           <h2>Result</h2>
//           <p>
//             {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExchangeRates;

// pages/index.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        setRates(response.data.rates);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const handleConvert = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const rate = rates[toCurrency] / rates[fromCurrency];
      setResult(rate * amount);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <div className="container">
        <div className="card">
          <h1>Currency Converter</h1>
          <div>
            <label>
              Amount:
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <label>
              From:
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {Object.keys(rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </label>
            <label>
              To:
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {Object.keys(rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </label>
            <button onClick={handleConvert}>Convert</button>
          </div>
          {result && (
            <div className="result">
              <h2>Result</h2>
              <p>
                {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
              </p>
            </div>
          )}
        </div>
      </div>
  );
};

export default ExchangeRates;
