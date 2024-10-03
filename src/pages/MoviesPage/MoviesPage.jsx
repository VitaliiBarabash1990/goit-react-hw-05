import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchMovies from "../../components/SearchMovies/SearchMovies";
import { fetchSearchByQuery } from "../../services/api";
import { useLocation, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
	const [searchMovie, setSearchMovie] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();

	const query = searchParams.get("query") ?? "";

	useEffect(() => {
		const getSearchMovie = async () => {
			const data = await fetchSearchByQuery(query);
			setSearchMovie(data);
		};
		getSearchMovie();
	}, [query]);

	const handleChangeQuery = (newQuery) => {
		if (!newQuery) {
			return setSearchParams({});
		}
		searchParams.set("query", newQuery);
		setSearchParams(searchParams);
	};

	return (
		<div>
			<SearchMovies handleChangeQuery={handleChangeQuery} />
			<MovieList lists={searchMovie} state={location} />
		</div>
	);
};

export default MoviesPage;
