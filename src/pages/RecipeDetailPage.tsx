import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return <div>Recipe Detail Page for recipe {id}</div>;
};

export default RecipeDetailPage;