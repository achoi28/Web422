// components/SearchCrypto.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.get('/api/crypto');
      const cryptos = response.data.data;

      const crypto = cryptos.find((c) => c.name.toLowerCase() === query.toLowerCase());

      if (crypto) {
        router.push(`/crypto/${crypto.id}`);
      } else {
        setError('Cryptocurrency not found');
      }
    } catch (err) {
      console.error('Error searching for cryptocurrency:', err);
      setError('An error occurred while searching for the cryptocurrency');
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a cryptocurrency"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Search;
