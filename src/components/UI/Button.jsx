import React from "react";
import classes from "./UI.module.css"

const Button = function ({ transparent, children, ...props }) {
    return (
        <button {...props} className={transparent ? classes.myBtnWhite : classes.myBtn}>
            {children}
        </button>
    );
}

export default Button;