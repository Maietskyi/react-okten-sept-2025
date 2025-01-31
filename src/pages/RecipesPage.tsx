import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/slices/recipesSlice';
import { RootState } from '../redux/store';

const RecipesPage: React.FC = () => {
    const dispatch = useDispatch();
    const { recipes, loading } = useSelector((state: RootState) => state.recipes);

    useEffect(() => {
        dispatch(fetchRecipes() as any);
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>{recipe.name}</div>
            ))}
        </div>
    );
};

export default RecipesPage;