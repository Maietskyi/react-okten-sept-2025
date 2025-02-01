import './App.css'
import {Outlet} from "react-router";
import {Menu} from "./components/menu-component/Menu";


function App() {

    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}

export default App
