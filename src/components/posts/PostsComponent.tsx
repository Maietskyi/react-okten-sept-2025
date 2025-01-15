import {FC, useEffect, useState} from "react";

import {postService} from "../../services/api.service.ts";
import {IPost} from "../../models/IPost.ts";

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
                posts.map(value => <div key={value.id}>{value.title}</div>)
            }
        </div>
    );
};

export default PostsComponent;