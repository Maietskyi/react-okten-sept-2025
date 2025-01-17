import {IPost} from "../../models/IPost.ts";


interface PostComponentProps{
    post:IPost
}

export  const PostComponent =({post}:PostComponentProps)=>{
    return <div>{post.title} {post.id}</div>;
}
//