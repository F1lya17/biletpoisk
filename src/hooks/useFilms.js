import { useMemo } from "react";


function useGenreFilms(films, genre) {
    const genreFilms = useMemo(() => {
        if (genre.id) {
            return [...films].filter(film => film.genre === genre.id);
        }
        else {
            return films;
        }
    }, [genre, films])

    return genreFilms;
}

export function useFilms(films, genre, query) {
    //console.log(films);
    const genreFilms = useGenreFilms(films, genre);

    const searchedAndGenrePosts = useMemo(() => {
        return genreFilms.filter(film => film.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, genreFilms]);

    return searchedAndGenrePosts;
}