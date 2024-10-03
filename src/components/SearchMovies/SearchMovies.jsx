import { Formik, Form, Field } from "formik";

const SearchMovies = ({ handleChangeQuery }) => {
	const searchWord = {
		query: "",
	};

	const heandleSubmit = (values) => {
		handleChangeQuery(values.query);
	};

	return (
		<div>
			<Formik initialValues={searchWord} onSubmit={heandleSubmit}>
				<Form>
					<Field type="text" name="query" />
					<button type="submit">Search</button>
				</Form>
			</Formik>
		</div>
	);
};

export default SearchMovies;
