import React, { useContext } from "react";
import classes from "./Order.module.css"
import { BasketContext } from "../../index";
import FilmCard from "../../components/FilmCard";
import { observer } from "mobx-react-lite";

const Order = observer(() => {
    const { basket } = useContext(BasketContext);

    return (
        <div className="container">
            <div className={classes.order}>
                {basket.films.length > 0 && <div className={classes.films}>
                    {basket.films.map(film =>
                        <FilmCard isOrder={true} key={film.id} film={film} />
                    )}
                </div>}
                {basket.films.length === 0 && <div className={classes.films}><h1>Выбранных фильмов нет</h1></div>}
                <div className={classes.total}>
                    <h2 className={classes.text}>Итого билетов:</h2>
                    <h2 className={classes.text}>{basket.totalCount}</h2>
                </div>
            </div>
        </div>
    );
})

export default Order;