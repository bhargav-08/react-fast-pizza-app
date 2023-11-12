import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    if (!query) return;
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="focus-ring w-28 rounded-full bg-yellow-100 px-3 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-300 sm:w-72
        "
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default OrderSearch;
