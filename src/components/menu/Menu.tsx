import {Link} from "react-router";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/cars'>cars</Link>
                </li>
                <li>
                    <Link to='/cars/create'>create</Link>
                </li>
            </ul>
        </div>
    );
};

