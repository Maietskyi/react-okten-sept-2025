import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <ul className='flex gap-10'>
            <p className='m-2 rounded-lg border-black border-2 px-6 p-2'>
                <Link to='/'>Home</Link></p>
            <p className='m-2 rounded-lg border-black border-2 px-6 p-2'>
                <Link to='/users'>Users</Link></p>
            <p className='m-2 rounded-lg border-black border-2 px-6 p-2'>
                <Link to='/posts'>Posts</Link></p>
        </ul>
    );
};
