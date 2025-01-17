import {IUser} from "../../models/IUser.ts";

interface UserComponentProps{
    user:IUser
}

export  const UserComponent =({user}:UserComponentProps)=>{
    return <div className='p-1 flex flex-col items-center justify-center'>{user.id} - {user.username}</div>;
}
