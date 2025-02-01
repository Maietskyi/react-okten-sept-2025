import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/slices/usersSlice';
import { RootState } from '../redux/store';
import { useSearchParams } from 'react-router-dom';
import Search from "../components/Search";
import { User } from '../models';

const UsersPage: React.FC = () => {
    const dispatch = useDispatch();
    const { items: users, page, total } = useSelector((state: RootState) => state.users);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const [currentPage, setCurrentPage] = useState(page);

    useEffect(() => {
        dispatch(fetchUsers({ searchQuery, page: currentPage }) as any);
    }, [searchQuery, currentPage, dispatch]);

    return (
        <div>
            <h2>Users</h2>
            <Search />
            <ul>
                {users.map((user: User) => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage * 10 >= total}>Next</button>
        </div>
    );
};

export default UsersPage;
