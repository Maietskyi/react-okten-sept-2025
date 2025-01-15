import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../services/api.service.ts";
import {IPost} from "../models/IPost.ts";

const PostsPage = () => {
    const {userId} = useParams();
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(()=>{
        if (userId){
            postService.getAllPostsOfUsersById(+userId)
                .then(value => {
                    setPosts(value)
                })
        }
    },[userId])
    return (
        <div>
            {posts.map(value => <div key={value.id}>{value.title}</div>)}
        </div>
    );
};

export default PostsPage;