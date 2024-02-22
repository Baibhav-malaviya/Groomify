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

import { Truck, Wallet, ShoppingBasket, ArrowLeftRight } from "lucide-react";

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
		<>
			<div className="flex items-center justify-around h-20 my-2 text-teal-800 bg-teal-200/50">
				<div className="flex space-x-2">
					<span>
						<Truck />
					</span>
					<p>Fast delivery</p>
				</div>
				<div className="flex space-x-2">
					<span>
						<Wallet />
					</span>
					<p>Cost effective</p>
				</div>
				<div className="flex space-x-2">
					<span className="w-auto h-auto">
						<ShoppingBasket />
					</span>
					<p>Pure Organic</p>
				</div>
				<div className="flex space-x-2">
					<span className="w-auto h-auto">
						<ArrowLeftRight />
					</span>
					<p>30 Day Return</p>
				</div>
			</div>

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
		</>
	);
}

export default PosterPage;
