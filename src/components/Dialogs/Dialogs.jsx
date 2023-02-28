import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Message = (props) => {
   return <div className={s.message}>{props.message}</div>
}
const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
           
    return  <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={path} className={Active}>{props.name}</NavLink>
                </div>
    
}
const Active = ({isActive}) => (isActive ? s.active : s.dialogitem);

const Dialogs = (props) => {
   
        let dialogsData = [
            {id: 1, name: 'Mom'}, 
            {id: 2, name: 'Vika'}, 
            {id: 3, name: 'Sasha'}, 
            {id: 4, name: 'Viktor'}, 
            {id: 5, name: 'Valera'}
        ]
        let dialogsElements = [
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
        <DialogItem  name={dialogsData[2].name} id={dialogsData[2].id} />,
        <DialogItem  name={dialogsData[3].name} id={dialogsData[3].id}/>,
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />]
        ;
       
        let messagesData = [
            {message: 'Hi'},
            {message: 'How are you?'},
            {message: 'Hi'}
        ]
        return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
               
            </div>
        </div>
    )
};

export default Dialogs;

