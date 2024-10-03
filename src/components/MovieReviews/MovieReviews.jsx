import { useEffect, useState } from "react";
import { fetchReviewsById } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
	const [reviews, setReviews] = useState();
	const { movieId } = useParams();

	useEffect(() => {
		const getReviews = async () => {
			const data = await fetchReviewsById(movieId);
			setReviews(data);
		};
		getReviews();
	}, [movieId]);
	if (!reviews) return <h3>Loading...</h3>;
	return (
		<div>
			{reviews.map((review) => (
				<li key={review.author}>
					<h3>Author: {review.author}</h3>
					<p>{review.content}</p>
				</li>
			))}
		</div>
	);
};

export default MovieReviews;
