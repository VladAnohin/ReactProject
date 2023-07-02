const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, likeCount: 5, message: "qweqwe" },
                { id: 2, message: 'q', likeCount: 15 },
            ],
            newPostText: ''

        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: 'Mom' },
                { id: 2, name: 'Vika' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Viktor' },
                { id: 5, name: 'Valera' }
            ],
            messages: [
                { message: 'Hi' },
                { message: 'How are you?' },
                { message: 'Hi' }
            ]
        },
        newMessageBody: ''
    },
    _callSubscriber() {
        console.log('state is changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // Наблюдатель // publisher 
    },

    dispatch(action) {  // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0

            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messages.push({id: 4, message: body});
            this._callSubscriber(this._state);
        }
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST });
export const newPostTextActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({type: ADD_POST});
export const updateNewMessageBodyCreator = text => 
({
    type: UPDATE_NEW_POST_TEXT, newText: text
})


export default store;
window.store = store;