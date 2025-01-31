import {Link} from "react-router";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
                <li>
                    <Link to='/recipes'>Recipes</Link>
                </li>
                <li>
                    <Link to='/complex'>Complex</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </div>
    );
};