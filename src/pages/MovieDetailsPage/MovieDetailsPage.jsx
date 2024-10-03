import { Suspense, useEffect, useRef, useState } from "react";
import { fetchMovieById } from "../../services/api";
import {
	Link,
	NavLink,
	Outlet,
	useLocation,
	useParams,
} from "react-router-dom";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
	const { movieId } = useParams();
	const [details, setDetails] = useState(null);
	const location = useLocation();
	const backLink = useRef(location.state ?? "/movies");
	const url = "https://image.tmdb.org/t/p/w500";

	const defaultImg =
		"https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

	useEffect(() => {
		const getMovie = async () => {
			const data = await fetchMovieById(movieId);
			setDetails(data);
		};
		getMovie();
	}, [movieId]);

	if (!details) return <h2>Loading...</h2>;
	return (
		<div>
			<div className={s.btn_wrap}>
				<Link to={backLink.current} className={s.btn}>
					Go back
				</Link>
			</div>
			<div className={s.wrapper}>
				<div className={s.wrap_img}>
					{details.backdrop_path ? (
						<img
							className={s.img}
							src={url + details.backdrop_path}
							alt={details.original_title}
						/>
					) : (
						<img
							className={s.img}
							src={defaultImg}
							alt={details.original_title}
						/>
					)}
				</div>
				<div className={s.description}>
					<h2>
						{details.original_title} ({details.release_date.slice(0, 4)})
					</h2>
					<p>User Score: {details.vote_average}%</p>
					<h3>Overview</h3>
					<p>{details.overview}</p>
					<h3>Genres</h3>
					<p className={s.list_ganres}>
						{details.genres.map((detail) => (
							<li className={s.genres} key={detail.id}>
								{detail.name}
							</li>
						))}
					</p>
				</div>
			</div>
			<hr />
			<div>
				<p>Additional information</p>
				<ul>
					<li>
						<NavLink to="cast">Cast</NavLink>
					</li>
					<li>
						<NavLink to="reviews">Reviews</NavLink>
					</li>
				</ul>
			</div>
			<hr />
			<Suspense fallback={<h2>Second suspense</h2>}>
				<Outlet />
			</Suspense>
		</div>
	);
};

export default MovieDetailsPage;
