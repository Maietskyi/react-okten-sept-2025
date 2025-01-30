import './App.css'
import {Outlet} from "react-router";
import {Menu} from "../components/Menu.tsx";

export function MainLayouts() {

    return (
        <>
            <Outlet/>
            <Menu/>
        </>
    )
}
