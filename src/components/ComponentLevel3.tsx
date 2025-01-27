import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ComponentLevel3: React.FC = () => {
    const { theme } = useTheme();
    return (
        <motion.div
            className="p-4 rounded-2xl shadow-lg"
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
        >
            <p>Level 3 Component - Current Theme: {theme}</p>
        </motion.div>
    );
};

export default ComponentLevel3;