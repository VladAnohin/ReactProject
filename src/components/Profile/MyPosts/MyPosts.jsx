import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                   <div>
                   <textarea></textarea>
                   </div>
                   <button>Add post</button>
                   <button>Remove</button>
                   
                </div>
            
            <div className={s.posts}>
            <Post likeCount='5'/>
            <Post likeCount="5"/>
            </div>
        </div>
    )      
}

export default MyPosts;