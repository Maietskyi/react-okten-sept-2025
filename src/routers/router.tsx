import {createBrowserRouter} from "react-router";
import MainLayouts from "../layouts/ManiLayouts.tsx";
import UsersPage from "../pages/users-page/UsersPage.tsx";
import RecipesPage from "../pages/recipes-page/RecipesPage.tsx";
import AuthPage from "../pages/auth-page/AuthPage.tsx";


export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayouts/>, children: [
            {path: "auth/users", element: <UsersPage/>},
            {path: "recipes", element: <RecipesPage/>},
            {path: "auth", element: <AuthPage/>}
        ]
    }
]);