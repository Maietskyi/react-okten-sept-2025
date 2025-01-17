import {createBrowserRouter} from "react-router-dom";
import PostsPage from "../pages/PostsPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PaginationLayout} from "../layouts/PadinationLayout.tsx";
import {MainLayout} from "../layouts/MainLayout.tsx";



export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>,
        children: [
            {
                path: "", element: <PaginationLayout/>, children: [
                    {path: "users", element: <UsersPage/>}
                ]
            },
            {
                path: "", element: <PaginationLayout/>, children: [
                    {path: "posts", element: <PostsPage/>}
                ]
            },
            {path: "/", element: <MainLayout/>}
        ]
    }
]);
//