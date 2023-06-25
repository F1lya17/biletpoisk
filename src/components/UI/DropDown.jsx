import React, { useEffect, useMemo } from "react";
import classes from "./UI.module.css"
import { createPortal } from "react-dom";

const modalRootElement = document.querySelector("#drop-down");

const DropDown = function (props) {
    const { elem, open, onClose, options, setSelected } = props;
    let top;
    let left;

    function changeCoord() {
        top = elem.getBoundingClientRect().top + 58 + window.pageYOffset;
        left = elem.getBoundingClientRect().left;
    }
    if (elem) {
        changeCoord()
    }

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
            <div style={{ top: top, left: left }} className={classes.dropdownContent}>
                {options.map(item =>
                    <div key={item.id} onClick={() => { setSelected(item); onClose() }} className={classes.dropdownItem}>
                        {item.name}
                    </div>
                )}
            </div>,
            element
        );
    }
    return null;
}

export default DropDown;