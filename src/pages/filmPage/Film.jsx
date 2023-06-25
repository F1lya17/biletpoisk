import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from './Film.module.css'
import TwoButtons from "../../components/UI/TwoButtons";
import ReviewCard from "../../components/ReviewCard";

const localGenre = { "fantasy": "Фэнтези", "horror": "Ужасы", "action": "Боевик", "comedy": "Комедия" }

const Film = function () {
    const params = useParams();
    const [film, setFilm] = useState({});
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getMovie() {
            const response = await axios.get("http://localhost:3001/api/movie", {
                params: {
                    movieId: params.id
                }
            });
            return response.data;
        }

        async function getReviews() {
            const response = await axios.get("http://localhost:3001/api/reviews", {
                params: {
                    movieId: params.id
                }
            });
            return response.data;
        }

        async function getData() {
            const [movieData, reviewsData] = await Promise.all([getMovie(), getReviews()]);
            setReviews(reviewsData);
            setFilm(movieData);
            setIsLoading(false);
        }
        getData();
    }, [])
    return (
        <div className="container">
            {!isLoading && <div className={classes.film}>
                <div className={classes.filmCard}>
                    <div className={classes.imgContainer}>
                        <img className={classes.img} src={film.posterUrl} alt="poster" />
                    </div>
                    <div className={classes.filmText}>
                        <div className={classes.filmUpperInfo}>
                            <div className={classes.filmInfo}>
                                <h1 className={classes.title}>{film.title}</h1>
                                <h3 className={classes.itemInfo}><span>Жанр: </span> {localGenre[film.genre]}</h3>
                                <h3 className={classes.itemInfo}><span>Год выпуска: </span> {film.releaseYear}</h3>
                                <h3 className={classes.itemInfo}><span>Рейтинг: </span> {film.rating}</h3>
                                <h3 className={classes.itemInfo}><span>Режиссер: </span> {film.director}</h3>
                            </div>
                            <TwoButtons film={film} />
                        </div>
                        <div className={classes.filmLowerInfo}>
                            <h2 className={classes.header}>Описание</h2>
                            <div className={classes.description}>
                                {film.description}
                            </div>
                        </div>
                    </div>
                </div>
                {reviews.map(rev =>
                    <ReviewCard key={rev.id} review={rev} />
                )}
            </div>}
            {isLoading && <h1>Идёт загрузка...</h1>}
        </div>
    );
}

export default Film;