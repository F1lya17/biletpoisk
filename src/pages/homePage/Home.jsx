import React, { useEffect, useRef, useState } from "react";
import classes from './Home.module.css'
import Input from '../../components/UI/Input'
import DropDown from '../../components/UI/DropDown'
import axios from "axios";
import FilmCard from "../../components/FilmCard";
import { useFilms } from "../../hooks/useFilms";
import arrow from "../../imgs/arrow.svg"


const Home = function () {
    const [cinemas, setCinemas] = useState([]);
    const [movies, setMoives] = useState([]);
    const [selectedCinema, setSelectedCinema] = useState({ name: "", id: "" });
    const [selectedGenre, setSelectedGenre] = useState({ name: "", id: "" });
    const [query, setQuery] = useState('');
    const [openGenre, setOpenGenre] = useState(false);
    const [openCinema, setOpenCinema] = useState(false);
    const firstDDref = useRef();
    const secondDDref = useRef();
    const [isLoading, setIsLoading] = useState(true);

    const filteredFilms = useFilms(movies, selectedGenre, query);

    useEffect(() => {
        async function getFilmsInCinema() {
            setIsLoading(true);
            if (selectedCinema.id !== "null") {
                const response = await axios.get("http://localhost:3001/api/movies", {
                    params: {
                        cinemaId: selectedCinema.id,
                    }
                })
                setMoives(response.data);
            }
            else {
                const response = await axios.get("http://localhost:3001/api/movies");
                setMoives(response.data);
            }
            setIsLoading(false);
        }
        getFilmsInCinema();
    }, [selectedCinema])

    useEffect(() => {
        async function getMovies() {
            const response = await axios.get("http://localhost:3001/api/movies");
            return response.data;
        }

        async function getCinemas() {
            const response = await axios.get("http://localhost:3001/api/cinemas");
            return response.data;
        }

        async function getData() {
            const [moviesData, cinemasData] = await Promise.all([getMovies(), getCinemas()]);
            setCinemas(cinemasData);
            setMoives(moviesData);
            setIsLoading(false);
        }
        getData();

    }, [])

    function stopOpening() {
        setOpenGenre(false);
        setOpenCinema(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', stopOpening)
        return () => {
            window.removeEventListener('scroll', stopOpening)
        }
    }, [])

    function openDropDown() {
        if (openCinema) {
            setOpenCinema(false);
            setOpenGenre(true);
        }
        else {
            setOpenGenre(prev => !prev);
        }
    }


    return (
        <div className="container">
            <div className={classes.home}>
                <div className={classes.filter}>
                    <h3 className={classes.title}>Фильтры поиска</h3>
                    <div className={classes.filterItem}>
                        <h4 className={classes.filterName}>Название</h4>
                        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={"Введите название"} />
                    </div>
                    <div className={classes.filterItem}>
                        <h4 className={classes.filterName}>Жанр</h4>
                        <div ref={firstDDref} id="1-drop-down" onClick={() => openDropDown()} className={classes.dropdownBtn}>
                            <h3 className={openGenre ? classes.dropdownBoldPhr : classes.dropdownPhr}>{selectedGenre.name ? selectedGenre.name : "Выберите жанр"}</h3>
                            <img className={openGenre ? "rotated-img" : "normal-img"} alt='arrow' src={arrow}></img>
                        </div>
                        <DropDown
                            open={openGenre}
                            onClose={() => setOpenGenre(false)}
                            options={[{ name: "Не выбран", id: "" }, { name: "Боевик", id: "action" }, { name: "Комедия", id: "comedy" }, { name: "Фэнтези", id: "fantasy" }, { name: "Ужасы", id: "horror" }]}
                            selected={selectedGenre}
                            setSelected={setSelectedGenre}
                            elem={firstDDref.current}
                        />
                    </div>
                    <div className={classes.filterItem}>
                        <h4 className={classes.filterName}>Кинотеатр</h4>
                        <div ref={secondDDref} id="2-drop-down" onClick={() => setOpenCinema(prev => !prev)} className={classes.dropdownBtn}>
                            <h3 className={openCinema ? classes.dropdownBoldPhr : classes.dropdownPhr}>{selectedCinema.name ? selectedCinema.name : "Выберите кинотеатр"}</h3>
                            <img className={openCinema ? "rotated-img" : "normal-img"} alt='arrow' src={arrow}></img>
                        </div>
                        <DropDown
                            open={openCinema}
                            onClose={() => setOpenCinema(false)}
                            options={[{ name: "Не выбран", id: "null" }, ...cinemas]}
                            selected={selectedCinema}
                            setSelected={setSelectedCinema}
                            elem={secondDDref.current}
                        />
                    </div>
                </div>
                {!isLoading && <div className={classes.films}>
                    {filteredFilms.map(film =>
                        <FilmCard isOrder={false} key={film.id} film={film} />
                    )}
                </div>}
                {isLoading && <h1>Идёт загрузка...</h1>}
            </div>
        </div>
    );
}

export default Home;