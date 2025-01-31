import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';

const AuthPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login({ id: 1, username, image: '' }));
    };

    return (
        <div>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default AuthPage;