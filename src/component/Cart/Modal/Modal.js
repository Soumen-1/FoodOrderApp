import classes from './Modal.module.css'
import React from 'react';
import ReactDOM from 'react-dom';
const Item =(props)=>{
   
    return <div className={classes['item-div']} >{props.children}</div>;
}
const Modal = (props)=>{
    return <React.Fragment>
        {ReactDOM.createPortal(<Item
        >{props.children}</Item>,document.getElementById('cart'))}
    </React.Fragment>
}

export default Modal;