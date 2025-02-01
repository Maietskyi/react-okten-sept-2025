import {createBrowserRouter} from "react-router";
import {PostsPage} from "../pages/PostsPage.tsx";
import ComplexPage from "../pages/ComplexPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import MainLayouts from "../Layouts/MainLayouts.tsx";
import {RecipesPage} from "../pages/RecipesPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayouts/>, children: [
            {path: "users", element: <UsersPage/>},
            {path: "posts", element: <PostsPage/>},
            {path: "recipes", element: <RecipesPage/>},
            {path: "complex", element: <ComplexPage/>}
        ]
    }
]);