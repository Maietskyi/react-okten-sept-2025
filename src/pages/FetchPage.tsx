import React from 'react';
import useFetch from '../hooks/useFetch';

type Post = {
    id: number;
    title: string;
    body: string;
};

const FetchPage: React.FC = () => {
    const { data, loading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Posts</h2>
            <ul>
                {data?.map((post) => (
                    <li key={post.id} className="mb-4 border-b pb-2">
                        <h3 className="font-semibold">{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchPage;