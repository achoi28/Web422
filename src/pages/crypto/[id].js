// pages/crypto/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchCrypto = async () => {
        try {
          const response = await axios.get(`/api/crypto/${id}`);
          setCrypto(response.data.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching crypto:', error);
          setError('Error fetching cryptocurrency data');
          setLoading(false);
        }
      };

      fetchCrypto();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='login-box'>
      <div>
      <h1>{crypto.name} Details</h1>
      <img src={crypto.logo} alt={crypto.name} style={{ width: '50px', height: '50px' }} />
      <p>Symbol: {crypto.symbol}</p>
      <p>Price: ${crypto.quote.USD.price.toFixed(2)}</p>
      <p>24h Volume: ${crypto.quote.USD.volume_24h.toFixed(2)}</p>
      <p>24h Change: {crypto.quote.USD.percent_change_24h.toFixed(2)}%</p>
      <p>Market Cap: ${crypto.quote.USD.market_cap.toFixed(2)}</p>
      <p>Max Supply: {crypto.max_supply !== null ? crypto.max_supply : 'N/A'}</p>
      <p>Circulating Supply: {crypto.circulating_supply !== null ? crypto.circulating_supply : 'N/A'}</p>
      <p>Description: {crypto.description} </p>
    </div>
    </div>
  );
};

export default CryptoDetail;
