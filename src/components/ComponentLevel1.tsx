
import React from 'react';
import ComponentLevel2 from './ComponentLevel2.tsx';

const ComponentLevel1: React.FC = () => (
    <div className="p-4 border rounded-xl">
        <p>Level 1 Component</p>
        <ComponentLevel2 />
    </div>
);

export default ComponentLevel1;