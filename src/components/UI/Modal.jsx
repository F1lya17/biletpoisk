import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import classes from "./UI.module.css"

const modalRootElement = document.querySelector("#modal");

const Modal = function (props) {
    const { open, onClose } = props;

    const element = useMemo(() => {
        const element = document.createElement("div");
        return element;
    }, []);

    useEffect(() => {
        if (open) {
            modalRootElement.appendChild(element);
            return () => {
                modalRootElement.removeChild(element);
            }
        }
    })
    if (open) {
        return createPortal(
            <div className={classes.modal_background} onClick={onClose}>
                <div className={classes.modal_card}>{props.children}</div>
            </div>,
            element
        );
    }
    return null;
}

export default Modal;