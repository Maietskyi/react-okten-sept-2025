import {FC, useEffect, useState} from "react";

import {postService} from "../../services/api.service.ts";
import {IPost} from "../../models/IPost.ts";
import {PostComponent} from "../post/PostComponent.tsx";

type PostsTypeProps = {
    userId: string;
}
const PostsComponent: FC<PostsTypeProps> = ({userId}) => {

    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(()=>{
        if (userId){
            postService.getAllPostsOfUsersById(+userId)
                .then(value => {
                    setPosts(value)
                })
        }
    },[userId]);
    return (
        <div>
            {
                posts.map((value: IPost) => <PostComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default PostsComponent;