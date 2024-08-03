// components/Crypto.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import loading from "./loading";

const Crypto = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cryptosPerPage = 20;

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get('/api/crypto');
        setCryptos(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cryptos:', error);
        setError('Error fetching cryptocurrency data');
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  if (loading) {
    <loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Get current cryptocurrencies
  const indexOfLastCrypto = currentPage * cryptosPerPage;
  const indexOfFirstCrypto = indexOfLastCrypto - cryptosPerPage;
  const currentCryptos = cryptos.slice(indexOfFirstCrypto, indexOfLastCrypto);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cryptos.length / cryptosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='crypto-list-page'>
      <h1>Cryptocurrency Listings</h1>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>24h Volume</th>
            <th>24h Change</th>
            <th>Market Cap</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {currentCryptos.map((crypto, index) => (
            <tr key={crypto.id}>
              <td>{indexOfFirstCrypto + index + 1}</td>
              <td><img src={crypto.logo} alt={crypto.name} className="crypto-logo" /></td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>${crypto.quote.USD.price.toFixed(2)}</td>
              <td>${crypto.quote.USD.volume_24h.toFixed(2)}</td>
              <td className={crypto.quote.USD.percent_change_24h >= 0 ? 'positive-change' : 'negative-change'}>
                {crypto.quote.USD.percent_change_24h.toFixed(2)}%
              </td>
              <td>${crypto.quote.USD.market_cap.toFixed(2)}</td>
              <td>
                <Link href={`/crypto/${crypto.id}`} legacyBehavior>
                  <a className="details-button">View</a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => paginate(number)} className="page-link">
            {number}
          </button>
        ))}
      </div>
      <loading />
    </div>
  );
};

export default Crypto;
