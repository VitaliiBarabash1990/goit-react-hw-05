import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ lists, state }) => {
	const { pathname } = useLocation();
	return (
		<div>
			{lists.map((list) => (
				<li className={s.item} key={list.id}>
					{pathname === "/movies" ? (
						<Link to={list.id.toString()} state={state}>
							<p>{list.original_title}</p>
						</Link>
					) : (
						<Link to={`movies/${list.id.toString()}`} state={state}>
							<p>{list.original_title}</p>
						</Link>
					)}
				</li>
			))}
		</div>
	);
};

export default MovieList;
