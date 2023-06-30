import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    
    return (
            <div className={s.item}>
                <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="Avatar" />
               <br />
               <span>{props.message}</span>
                <br />
                <span>like {props.likeCount}</span>
            </div>
          
           
    )      
}

export default Post