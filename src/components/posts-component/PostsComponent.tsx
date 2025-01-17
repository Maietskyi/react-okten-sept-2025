import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {PostComponent} from "./PostComponent.tsx";
import {useSearchParams} from "react-router-dom";
import {getPosts} from "../../services/posts.api.service.ts";
import {IPostsResponse} from "../../models/IPostsResponse.ts";

export const PostsComponent = () => {
    const [searchParams] = useSearchParams({page:'1'});

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(()=>{
        const currentPage = searchParams.get('page') || '1';
        getPosts(currentPage)
            .then(({posts}:IPostsResponse) => {
                setPosts(posts)
            });
    },[searchParams]);
    return (
        <div>
            {
                posts.map((post: IPost) =>
                    <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};
//