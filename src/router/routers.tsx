import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import SingleUsersDetailsPage from "../pages/SingleUsersDetailsPage.tsx";


export const routers = createBrowserRouter([
    {
        path: '', element: <Layout/>,
        children: [
            {path: '', element: <HomePage/>},
            {path: 'users', element: <UsersPage/>,
                children: [
                    {path: 'posts/:userId', element: <PostsPage/>}
                ]},
            {path: 'users/details', element: <SingleUsersDetailsPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]
    },
])