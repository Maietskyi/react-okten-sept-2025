import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {PostComponent} from "./PostComponent.tsx";
import {Outlet, useSearchParams} from "react-router-dom";
import {getPosts} from "../../services/posts.api.service.ts";
import {PaginationComponent} from "../pagination-component/PaginationComponent.tsx";
import {IPostsResponse} from "../../models/IPostsResponse.ts";

export const PostsComponent = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [disabledStatus, setDisabledStatus] = useState<boolean>(false);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getPosts(currentPage)
            .then(({posts, total}: IPostsResponse) => {
                setPosts(posts);
                const lastUserIdOfCurrentBatch = posts[posts.length - 1]['id'];
                if (lastUserIdOfCurrentBatch === total) {
                    setDisabledStatus(true);
                }
            });
    }, [searchParams]);
    return (
        <>
            <div>
                {
                    posts.map((post: IPost) =>
                        <PostComponent key={post.id} post={post}/>)
                }
            </div>
            <div>
                <Outlet/>
                <PaginationComponent disabledStatus={disabledStatus}/>
            </div>
        </>
    );
};