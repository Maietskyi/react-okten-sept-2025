
import {Outlet} from "react-router-dom";
import {MenuComponent} from "../components/menu/MenuComponent.tsx";



export const MainLayout = () => {
    return <div  className='flex flex-col items-center justify-center'>
        <MenuComponent/>
        <Outlet/>
    </div>
};


