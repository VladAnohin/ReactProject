const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
	dialogsData: [
		{ id: 1, name: "John" },
		{ id: 2, name: "Kelly" },
		{ id: 3, name: "Sasha" },
		{ id: 4, name: "Viktor" },
		{ id: 5, name: "Valera" },
	],
	messages: [{ message: "Hi" }, { message: "How are you?" }, { message: "Hi" }],
	newMessageBody: "",
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = "";
			state.messages.push({ id: 4, message: body });
			return state;
		default:
			return state;
	}
};

export default messagesReducer;
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body,
});
