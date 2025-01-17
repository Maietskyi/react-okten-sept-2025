import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <ul>
            <li><Link to='/users'>users</Link></li>
            <li><Link to='/posts'>posts</Link></li>
            <li><Link to='/'>home</Link></li>
        </ul>
    );
};
//
