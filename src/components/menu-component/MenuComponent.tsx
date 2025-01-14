import {Link} from "react-router-dom";


export const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/users'> Users</Link>
                </li>
            </ul>
        </div>
    );
};

