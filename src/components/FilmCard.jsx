import React, { useContext, useState } from "react";
import TwoButtons from "./UI/TwoButtons"
import { NavLink } from "react-router-dom";
import cross from "../imgs/cross.svg"
import classes from "../pages/orderPage/Order.module.css"
import Button from "../components/UI/Button"
import Modal from "./UI/Modal";
import { BasketContext } from "..";

const localGenre = { "fantasy": "Фэнтези", "horror": "Ужасы", "action": "Боевик", "comedy": "Комедия" }

const FilmCard = function ({ film, isOrder }) {
    const [open, setOpen] = useState(false);
    const { basket } = useContext(BasketContext);

    return (
        <div className="film-card">
            <div className="film-card__row">
                <div className="img-container">
                    <img alt='poster' src={film.posterUrl}></img>
                </div>
                <div className="film-card__description">
                    <div className="film-card__info">
                        <NavLink to={`http://localhost:3000/film/${film.id}`} className="film-card__title">{film.title}</NavLink>
                        <p className="film-card__genre">{localGenre[film.genre]}</p>
                    </div>
                    <TwoButtons setOpen={setOpen} film={film} />
                    {isOrder && <img onClick={() => setOpen(true)} className="film-card__img" src={cross} alt="cross"></img>}
                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className={classes.firstLine}>
                    <h2 className={classes.title}>Удаление билета</h2>
                    <img className={classes.modalImg} src={cross} alt="cross"></img>
                </div>
                <p className={classes.question}>Вы уверены, что хотите удалить билет?</p>
                <div className={classes.buttons}>
                    <Button onClick={() => basket.deleteFilm(film.id)}>Да</Button>
                    <Button onClick={() => setOpen(false)} transparent={true}>Нет</Button>
                </div>
            </Modal>
        </div>
    );
}

export default FilmCard;