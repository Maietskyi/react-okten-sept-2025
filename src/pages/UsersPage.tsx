import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/slices/usersSlice';
import { RootState } from '../redux/store';
import { useSearchParams } from 'react-router-dom';
import Search from "../components/Search";
import { User } from '../models';

const UsersPage: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users.items);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';

    useEffect(() => {
        dispatch(fetchUsers(searchQuery) as any);
    }, [searchQuery, dispatch]);

    return (
        <div>
            <h2>Users</h2>
            <Search />
            <ul>
                {users.map((user: User) => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;
