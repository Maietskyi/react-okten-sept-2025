import {useAppSelector, useAppDispatch} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/UserSlice.ts";
import {postActions} from "../redux/slices/PostSlice.ts";
import {commentActions} from "../redux/slices/CommentSlice.ts";
import {IComment} from "../models/IComment.ts";
import {IUser} from "../models/IUser.ts";
import {IPost} from "../models/IPost.ts";

export const ComplexComponent = () => {

    const dispatch = useAppDispatch();
    const {
        commentStoreSlice: {comments},
        userStoreSlice: {users},
        postStoreSlice: {posts}
    } = useAppSelector(state => state);

    useEffect(() => {
        if(!users.length){
            dispatch(userActions.loadUsers());
        }
        if(!posts.length){
            dispatch(postActions.loadPosts());
        }
        if(!comments.length){
            dispatch(commentActions.loadComments());
        }
    })

    return (
        <div>
            Users
            {users.map((user:IUser) => (<div key={user.id}>{user.id}--{user.name}</div>))}
            <br/>
            Posts
            {posts.map((post:IPost) => (<div key={post.id}>{post.id}--{post.title}</div>))}
            <br/>
            Comments
            {comments.map((comment:IComment) => (<div key={comment.id}>{comment.id}--{comment.name}</div>))}
        </div>
    );
};

export default ComplexComponent;