import {Outlet} from "react-router";
import {Menu} from "../components/Menu.tsx";

const MainLayouts = () => {

    return (
        <div>
            <Outlet/>
            <Menu/>
        </div>
    );
};

export default MainLayouts;
