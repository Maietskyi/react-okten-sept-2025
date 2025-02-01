// import {Link} from "react-router";
//
// import {useSelector} from "react-redux";
// import {RootState} from "../../redux/store.ts";
//
// export const Menu = () => {
//     const user = useSelector((state: RootState) => state.auth.user);
//     return (
//         <div>
//             <ul>
//                 <Link to="/">Home</Link>
//                 {user ? (
//                     <div>
//                         <Link to="/users">Users</Link>
//                         <Link to="/recipes">Recipes</Link>
//                         <img src={user.image} alt={user.username} width={40} height={40} />
//                     </div>
//                 ) : (
//                     <Link to="/auth">Login</Link>
//                 )}
//             </ul>
//         </div>
//     );
// };
import {Link} from "react-router";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
                <li>
                    <Link to='/recipes'>recipes</Link>
                </li>
                <li>
                    <Link to='/auth'>auth</Link>
                </li>

            </ul>
        </div>
    );
};