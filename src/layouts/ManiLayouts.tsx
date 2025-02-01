import {Outlet} from "react-router";
import {Menu} from "../components/menu-component/Menu.tsx";


const MainLayouts = () => {

    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;