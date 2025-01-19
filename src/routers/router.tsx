import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import CarPage from "../pages/CarPage.tsx";
import CreateCarPage from "../pages/CreateCarPage.tsx";

export const routes = createBrowserRouter([
    {path:"/",element:<App/>, children:[
            {path:"/cars", element:<CarPage/>},
            {path:"/cars/create", element:<CreateCarPage/>}
        ]},
]);