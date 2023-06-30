import React from 'react';
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Active = ({isActive}) => (isActive ? s.active : s.dialogitem);
const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
           
    return  <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={path} className={Active}>{props.name}</NavLink>
                </div>
    
}


export default DialogItem;

