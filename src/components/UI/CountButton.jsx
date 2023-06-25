import React from "react";
import classes from './UI.module.css'

const CountButton = function ({ children, ...props }) {
    return (
        <button className={classes.countBtn} {...props}>
            {children}
        </button>
    );
}

export default CountButton;