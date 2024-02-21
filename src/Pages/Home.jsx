import NewsLetter from "../Components/NewsLetter";
import Poster from "../Components/Poster";
import Products from "../Components/Products";
import UserReviews from "../Components/UserReviews";

function Home() {
	return (
		<div>
			<Poster />
			<Products />
			<NewsLetter />
			<UserReviews />
		</div>
	);
}

export default Home;
