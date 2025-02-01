import {createRoot} from 'react-dom/client'
import './index.css'
// import {Provider} from "react-redux";
import {RouterProvider} from "react-router";
import {routes} from "./routers/router.tsx";
// import store from "./redux/store.ts";


createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>)
