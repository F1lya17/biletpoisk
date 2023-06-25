import React from "react";

const localGenre = { "fantasy": "Фэнтези", "horror": "Ужасы", "action": "Боевик", "comedy": "Комедия" }

const OrderFilm = function ({ film }) {
    return (
        <NavLink to={`film/${film.id}`} className="film-card">
            <div className="film-card__row">
                <div className="img-container">
                    <img alt='poster' src={film.posterUrl}></img>
                </div>
                <div className="film-card__description">
                    <div className="film-card__info">
                        <h3 className="film-card__title">{film.title}</h3>
                        <p className="film-card__genre">{localGenre[film.genre]}</p>
                    </div>
                    <TwoButtons />
                </div>
            </div>
        </NavLink>
    );
}

export default OrderFilm;