import {IUser} from "../../models/IUser.ts";

interface UserComponentProps{
    user:IUser
}

export  const UserComponent =({user}:UserComponentProps)=>{
    return <div className='p-1'>{user.id} - {user.username}</div>;
}
