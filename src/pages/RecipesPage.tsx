import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Recipe, User } from '../models';

const RecipeDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [creator, setCreator] = useState<User | null>(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then(res => res.json())
            .then(setRecipe);
    }, [id]);

    useEffect(() => {
        if (recipe) {
            fetch(`https://dummyjson.com/users/${recipe.creatorId}`)
                .then(res => res.json())
                .then(setCreator);
        }
    }, [recipe]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
            <p>Tags: {recipe.tags.join(', ')}</p>
            {creator && (
                <p>Created by: <a href={`/users/${creator.id}`}>{creator.username}</a></p>
            )}
        </div>
    );
};

export default RecipeDetailPage;