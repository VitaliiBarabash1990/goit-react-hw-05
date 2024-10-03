import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/";
const options = {
	headers: {
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2VhYTEzOWU1NjUzYzlhNjgwMWQ3MmIwOGU5ZDdmNiIsIm5iZiI6MTcyNzc4Mjg4Mi4yODY1MDQsInN1YiI6IjY2ZjY4OWYyN2IzMDcyNjg4ZDk2NmMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZVwGi0AEgIwMhT2g6KBk5MRZ63LwJVKMY4nDBSt231k",
	},
};

export const fetchMovies = async () => {
	const { data } = await axios.get("3/trending/movie/day", options);
	return data.results;
};

export const fetchMovieById = async (movieId) => {
	const { data } = await axios.get(`3/movie/${movieId}`, options);
	return data;
};

export const fetchCreditsById = async (movieId) => {
	const { data } = await axios.get(`3/movie/${movieId}/credits`, options);
	return data.cast;
};

export const fetchReviewsById = async (movieId) => {
	const { data } = await axios.get(`3/movie/${movieId}/reviews`, options);
	return data.results;
};

export const fetchSearchByQuery = async (query) => {
	const { data } = await axios.get(
		`3/search/movie?query=${query}&include_adult=false`,
		options
	);
	return data.results;
};

// axios.defaults.baseURL = "https://dummyjson.com/";

// export const fetchUsers = async () => {
// 	const { data } = await axios.get("users");
// 	return data.users;
// };

// export const fetchUserById = async (userId) => {
// 	const { data } = await axios.get(`users/${userId}`);
// 	return data;
// };

// export const fetchPostsByUserId = async (userId) => {
// 	const { data } = await axios.get(`posts/user/${userId}`);
// 	return data.posts;
// };

// export const fetchPostById = async (postId) => {
// 	const { data } = await axios.get(`posts/${postId}`);
// 	return data;
// };
