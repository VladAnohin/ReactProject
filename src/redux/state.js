import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, likeCount: 5, message: "qweqwe" },
				{ id: 2, message: "q", likeCount: 15 },
			],
			newPostText: "",
		},
		messagesPage: {
			dialogsData: [
				{ id: 1, name: "Mom" },
				{ id: 2, name: "Vika" },
				{ id: 3, name: "Sasha" },
				{ id: 4, name: "Viktor" },
				{ id: 5, name: "Valera" },
			],
			messages: [
				{ message: "Hi" },
				{ message: "How are you?" },
				{ message: "Hi" },
			],
			newMessageBody: "",
		},
		sidebar: {},
	},
	_callSubscriber() {
		console.log("state is changed");
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer; // Наблюдатель // publisher
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = messagesReducer(
			this._state.messagesPage,
			action
		);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	},
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const newPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body,
});

export default store;
window.store = store;
