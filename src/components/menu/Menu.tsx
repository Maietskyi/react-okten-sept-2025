import {Link} from "react-router";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/cars">cars</Link>
                </li>
                <li>
                    <Link to="/cars/create">create car</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;