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

import Poster from "../Components/Poster";

function PosterPage() {
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
	);
}

export default PosterPage;
