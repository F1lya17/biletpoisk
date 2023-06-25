import React from "react";
import classes from './Qa.module.css'
import QaItems from "../../components/QaItems";

const Qa = function () {
    return (
        <div className="container">
            <div className={classes.qa}>
                <div className={classes.title}>
                    Вопросы-ответы
                </div>
                <QaItems />
            </div>
        </div>
    );
}

export default Qa;