import React, { useContext } from "react";
import classes from "./UI.module.css"
import CountButton from './CountButton'
import minus from "../../imgs/dash.svg"
import plus from "../../imgs/plus.svg"
import { BasketContext } from "../..";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";

const TwoButtons = observer(({ setOpen, film }) => {
    const { basket } = useContext(BasketContext);
    const { pathname } = useLocation();

    const changeCount = (value) => {
        if (value === -1) {
            if (basket.getFilmCount(film.id) === 1 && pathname !== '/') {
                setOpen(true);
            }
            else if (basket.getFilmCount(film.id) !== 0) {
                basket.decreaseCount(film.id)
            }
        }
        else {
            if (basket.getFilmCount(film.id) !== 30) {
                basket.addFilm(film);
            }
        }
    }
    return (
        <div className={classes.TwoButtons}>
            <CountButton className={basket.getFilmCount(film.id) === 0 ? classes.disabled : classes.countBtn} onClick={() => changeCount(-1)}><img className={classes.btnImg} alt='minus' src={minus} /></CountButton>
            <div className={classes.count}>{basket.getFilmCount(film.id)}</div>
            <CountButton className={basket.getFilmCount(film.id) === 30 ? classes.disabled : classes.countBtn} onClick={() => changeCount(1)}><img className={classes.btnImg} alt='plus' src={plus} /></CountButton>
        </div>
    );
})

export default TwoButtons;