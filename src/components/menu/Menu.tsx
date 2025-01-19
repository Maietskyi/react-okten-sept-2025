import {Link} from "react-router";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/cars'}>Cars</Link>
                </li>
                <li>
                    <Link to={'/cars/create'}>Create car</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;