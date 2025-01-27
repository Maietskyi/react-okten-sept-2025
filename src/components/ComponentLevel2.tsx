import React from 'react';
import ComponentLevel3 from './ComponentLevel3';

const ComponentLevel2: React.FC = () => (
    <div className="p-4 border rounded-xl">
        <p>Level 2 Component</p>
        <ComponentLevel3 />
    </div>
);

export default ComponentLevel2;