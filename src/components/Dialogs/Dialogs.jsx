import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
	updateNewMessageBodyCreator,
	sendMessageCreator,
} from "../../redux/state";

const Dialogs = (props) => {
	let state = props.store.getState().messagesPage;
	let dialogsElements = state.dialogsData.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} />
	));
	let messagesElements = state.messages.map((m) => (
		<Message message={m.message} />
	));
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	};
	let onMessageChange = (e) => {
		let body = e.target.value;
		props.store.dispatch(updateNewMessageBodyCreator(body));
	};
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea
							placeholder="Enter your message"
							value={newMessageBody}
							onChange={onMessageChange}
						></textarea>
					</div>
					<button onClick={onSendMessageClick}>Send</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
