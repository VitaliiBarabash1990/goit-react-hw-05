import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCreditsById } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
	const [artists, setArtists] = useState([]);
	const { movieId } = useParams();

	const defaultImg =
		"https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

	const url = "https://image.tmdb.org/t/p/w500";
	useEffect(() => {
		const getCredits = async () => {
			const data = await fetchCreditsById(movieId);
			setArtists(data);
		};
		getCredits();
	}, [movieId]);
	return (
		<div>
			{artists.map((artist) => (
				<li className={s.wrap_img} key={artist.id}>
					{artist.profile_path ? (
						<img
							className={s.img}
							src={url + artist.profile_path}
							alt={artist.original_name}
						/>
					) : (
						<img
							className={s.img}
							src={defaultImg}
							alt={artist.original_name}
						/>
					)}
					<p>{artist.name}</p>
					<p className={s.border_bottom}>{artist.character}</p>
				</li>
			))}
		</div>
	);
};

export default MovieCast;
