import {useContext} from "react";
import {MyContext} from "../context/MyContextProvider.tsx";
import './BB.css'

const ComponentBB = () => {
    const {theme} = useContext(MyContext)
    return (
        <div className={theme}>
            this is component BB, and theme value is - {theme}
        </div>
    );
};

export default ComponentBB;