import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Search: React.FC = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = () => {
        if (!query.trim()) return;
        const searchType = location.pathname.includes('users') ? 'users' : 'recipes';
        navigate(`/${searchType}?search=${query}`);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by ID or name"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;
