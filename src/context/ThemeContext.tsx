import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}>
    {children}
    </div>
    </ThemeContext.Provider>
);
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;