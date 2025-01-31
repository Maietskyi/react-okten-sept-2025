import {createBrowserRouter} from "react-router";
import {RecipesPage} from "../pages/RecipesPage.tsx";
import ComplexPage from "../pages/ComplexPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import MainLayouts from "../Layouts/MainLayouts.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayouts/>, children: [
            {path: "users", element: <UsersPage/>},
            {path: "recipes", element: <RecipesPage/>},
            {path: "complex", element: <ComplexPage/>}
        ]
    }
]);