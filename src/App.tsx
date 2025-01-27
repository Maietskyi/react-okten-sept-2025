import React from 'react';
import FetchPage from './pages/FetchPage';

const App: React.FC = () => {
  return (
      <div className="min-h-screen p-4">
        <h1 className="text-center text-2xl font-bold mb-6">Custom Hook Example</h1>
        <FetchPage />
      </div>
  );
};

export default App;