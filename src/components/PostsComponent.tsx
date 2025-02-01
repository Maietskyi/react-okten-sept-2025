import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {postActions} from "../redux/slices/PostSlice.ts";
import {IPost} from "../models/IPost.ts";

export const PostsComponent = () => {

    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.postStoreSlice.posts);
    useEffect(() => {
        dispatch(postActions.loadPosts())
    }, [])

    return (
        <>
            {posts.map((post:IPost) => (<div key={post.id}>{post.id}--{post.title}</div>))}
        </>
    );
};