import {createRoot} from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router";
import App from "./App.tsx";

const routes = createBrowserRouter([
    {
        path: "/",element:<App/>,children:[
            {path: "users",element:null},
            {path: "posts",element:null},
            {path: "comments",element:null},
            {path: "complex",element:null}
        ]
    }
]);

createRoot(document.getElementById('root')!).render(<Provider store={store}>
 <RouterProvider router={routes}/>
</Provider>)
