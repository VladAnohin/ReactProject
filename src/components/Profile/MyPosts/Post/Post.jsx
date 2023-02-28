import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
         
            <div className={s.item}>
                <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="Avatar Image" />
               <br />
                post 1
                <div>
                <span>like {props.likeCount}</span>
            </div>
            </div>
          
           
    )      
}

export default Post;