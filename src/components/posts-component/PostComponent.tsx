import {IPost} from "../../models/IPost.ts";


interface PostComponentProps{
    post:IPost
}

export  const PostComponent =({post}:PostComponentProps)=>{
    return <div className='p-1'>{post.id}. {post.title}</div>;
}
