// components/Crypto.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Crypto = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Cryptocurrency Listings</h1>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>24h Volume</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <tr key={crypto.id}>
              <td><img src={crypto.logo} alt={crypto.name} style={{ width: '24px', height: '24px' }} /></td>
              <td>
                <Link href={`/crypto/${crypto.id}`}>
                  {crypto.name}
                </Link>
              </td>
              <td>{crypto.symbol}</td>
              <td>${crypto.quote.USD.price.toFixed(2)}</td>
              <td>${crypto.quote.USD.volume_24h.toFixed(2)}</td>
              <td>{crypto.quote.USD.percent_change_24h.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crypto;
