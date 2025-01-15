import './App.css'
import {PaginationComponent} from "./components/pagination/PaginationComponent.tsx";
import Some from "./components/some/Some.tsx";

export const App = () => {
    return (
        <div>
            <Some/>
            Hello
            <PaginationComponent/>
        </div>
    )
}

