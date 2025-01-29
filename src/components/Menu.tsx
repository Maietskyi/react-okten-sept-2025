import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'users'}>users</Link></li>
            <li><Link to={'user/1'}>user</Link></li>
            <li><Link to={'posts'}>posts</Link></li>
        </ul>
    );
};

