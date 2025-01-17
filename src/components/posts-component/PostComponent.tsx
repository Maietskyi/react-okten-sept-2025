import {IPost} from "../../models/IPost.ts";


interface PostComponentProps{
    post:IPost
}

export  const PostComponent =({post}:PostComponentProps)=>{
    return <div className='p-1 flex flex-col items-center justify-center'>{post.id}. {post.title}</div>;
}
