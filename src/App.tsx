import './App.css'
import {Outlet} from "react-router";
import {Menu} from "./components/Menu.tsx";

function App() {

    return (
        <>
            <Outlet/>
            <Menu/>
        </>
    )
}

export default App
