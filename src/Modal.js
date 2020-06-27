import React from "react";
import ReactDOM from "react-dom";

import './style.css';

const { createPortal } = ReactDOM;

const Modal = ({ colorName, onClose }) => (
    createPortal(
        <div className={`modal ${colorName}-modal`}>
            <h3>{colorName.toUpperCase()}</h3>
            <div className={`big-square ${colorName}-square`}/>
            <button className={`${colorName}-button`} onClick={onClose}>CLOSE</button>
        </div>,
        document.body
    )
);

export default Modal;
