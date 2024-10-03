import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./NotFoundPage.module.css";
const NotFoundPage = () => {
	const location = useLocation;
	const backLink = useRef(location.state ?? "/movies");
	return (
		<div>
			<div className={s.btn_wrap}>
				<Link to={backLink.current} className={s.btn}>
					Go back
				</Link>
			</div>
			<h1>Sorry but page is not found...!</h1>
		</div>
	);
};

export default NotFoundPage;
