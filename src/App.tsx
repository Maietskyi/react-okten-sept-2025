import './App.css'
import {PaginationComponent} from "./components/pagination/PaginationComponent.tsx";
import {Users} from "./components/users/usersComponent.tsx";

export const App = () => {
    return (
        <div>
            <Users/>
            <PaginationComponent/>
        </div>
    )
}

