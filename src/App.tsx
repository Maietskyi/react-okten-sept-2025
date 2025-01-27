import './App.css'
import UsersComponent from "./components/UsersComponent.tsx";
import {useFetch} from "./hooks/useFetch.tsx";

function App() {

    console.log('app');

    useFetch();
    return (
        <div>
            <UsersComponent/>
        </div>
    )
}

export default App
