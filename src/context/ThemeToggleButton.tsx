import React from 'react';
import {useTheme} from "./ThemeContext.tsx";


const ThemeToggleButton: React.FC = () => {
    const { toggleTheme } = useTheme();
    return (
        <button className="mt-4" onClick={toggleTheme}>
            Toggle Theme
        </button>
    );
};

export default ThemeToggleButton;
