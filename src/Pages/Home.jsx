import { Link } from "react-router-dom";

import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";
import UserReviews from "../Components/UserReviews";
import PosterPage from "./PosterPage";

function Home() {
	return (
		<div>
			<PosterPage />
			<div className=" relative w-full h-[650px] overflow-hidden">
				<Products />
				<Link
					to={"/products"}
					className="absolute bottom-[30%] font-bold p-4 px-5 bg-teal-300 rounded-lg right-10"
				>
					Show more...
				</Link>
			</div>
			<NewsLetter />
			<UserReviews />
		</div>
	);
}

export default Home;
