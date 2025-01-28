import { useState } from 'react';
import './App.css'
import ComponentA from "./components/ComponentA.tsx";
import ComponentB from "./components/ComponentB.tsx";
import {MyContext} from "./context/MyContextProvider.tsx";

function App() {

    const [themeColor, setThemeColor] = useState<string>('light');
    return (
        <div>
            <MyContext.Provider value={{
                theme:themeColor,
                changeTheme: (themeValue:string)=> {
                    setThemeColor(themeValue)
                }
            }}>
                <ComponentA/>
                <ComponentB/>
            </MyContext.Provider>
        </div>
    )
}

export default App
