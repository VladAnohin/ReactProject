import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
	addPostActionCreator,
	newPostTextActionCreator,
} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
	let postsElements = props.posts.map((p) => (
		<Post likeCount={p.likeCount} message={p.message} />
	));

	let newPost = React.createRef();
	let addPost = () => {
		props.dispatch(addPostActionCreator());
	};
	let onPostChange = () => {
		let text = newPost.current.value;
		let action = newPostTextActionCreator(text);
		props.dispatch(action);
	};

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPost}
						value={props.newPostText}
					/>
				</div>
				<button onClick={addPost}>Add post</button>
				<button>Remove</button>
			</div>

			<div className={s.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
