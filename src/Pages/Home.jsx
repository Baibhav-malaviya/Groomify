import NewsLetter from "../Components/NewsLetter";
import Poster from "../Components/Poster";
import Products from "../Components/Products";

function Home() {
	return (
		<div>
			<Poster />
			<Products />
			<NewsLetter />
		</div>
	);
}

export default Home;
