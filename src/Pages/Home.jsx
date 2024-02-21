import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from "swiper/modules";
import "swiper/css";

import "swiper/css/bundle";

// import ReviewCard from "./ReviewCard";
// import Title from "./Title";

import NewsLetter from "../Components/NewsLetter";
import Poster from "../Components/Poster";
import Products from "../Components/Products";
import UserReviews from "../Components/UserReviews";
import { Link } from "react-router-dom";

function Home() {
	const posters = [
		{
			id: 1,
			slogan:
				"Effortless Grooming, Elevated Results: Look and feel your best, effortlessly.",
			imageUri: "/poster_1.jpg",
		},
		{
			id: 2,
			slogan: "redefined, with sophisticated ingredients and textures.",
			imageUri: "/poster_2.jpg",
		},
		{
			id: 3,
			slogan:
				"Innovation meets luxury in our high-performance grooming essentials.",
			imageUri: "/poster_3.jpg",
		},
	];
	return (
		<div>
			<div className="text-white rounded-lg ">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
					spaceBetween={0}
					slidesPerView={1}
					autoplay={{ delay: 1500 }}
					loop={true}
					grabCursor={true}
					speed={1500}
					navigation
					className="relative"
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
				>
					{posters.map((poster) => (
						<SwiperSlide key={poster.id}>
							<Poster poster={poster} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
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
