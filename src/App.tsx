import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import UsersPage from './pages/UsersPage';
import RecipesPage from './pages/RecipesPage';
import UserDetailPage from './pages/UserDetailPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';

const App: React.FC = () => {
  return (
      <div className="min-h-screen">
        <Navbar />
        <SearchBar onSearch={(query) => console.log(`Search for: ${query}`)} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailPage />} />
        </Routes>
        <Pagination currentPage={1} totalPages={10} onPageChange={(page) => console.log(`Go to page: ${page}`)} />
      </div>
  );
};

export default App;

