import React from "react";
import ReactDOM from "react-dom";
import { useRouteMatch, useParams } from "react-router-dom"

import './style.css';

const { createPortal } = ReactDOM;

const Modal = ({ onClose }) => {
    // const { path } = useRouteMatch();
    // const colorName = path.slice(1, path.length);

    const { colorName } = useParams();

    return (
        createPortal(
            <div className={`modal ${colorName}-modal`}>
                <h3>{colorName.toUpperCase()}</h3>
                <div className={`big-square ${colorName}-square`}/>
                <button className={`${colorName}-button`} onClick={onClose}>CLOSE</button>
            </div>,
            document.body
        )
    );
};

export default Modal;
