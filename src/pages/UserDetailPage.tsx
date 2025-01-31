import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return <div>User Detail Page for user {id}</div>;
};

export default UserDetailPage;