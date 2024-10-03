import s from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";

const HomePage = () => {
	const [lists, setLists] = useState([]);
	const location = useLocation();
	useEffect(() => {
		const getAllUsers = async () => {
			const data = await fetchMovies();
			setLists(data);
		};
		getAllUsers();
	}, []);

	return (
		<div>
			<h1 className={s.h1}>Tranding tooday</h1>
			<MovieList lists={lists} state={location} />
		</div>
	);
};

export default HomePage;
