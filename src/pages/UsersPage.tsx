import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/slices/usersSlice';
import { RootState } from '../redux/store';

const UsersPage: React.FC = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(fetchUsers() as any);
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>{user.username}</div>
            ))}
        </div>
    );
};

export default UsersPage;