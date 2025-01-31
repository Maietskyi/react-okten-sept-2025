import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Navbar: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <nav>
            <Link to="/">Home</Link>
            {user ? (
                <>
                    <Link to="/users">Users</Link>
                    <Link to="/recipes">Recipes</Link>
                    <img src={user.image} alt={user.username} width={40} height={40} />
                </>
            ) : (
                <Link to="/auth">Login</Link>
            )}
        </nav>
    );
};

export default Navbar;