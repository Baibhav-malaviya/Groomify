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

import ReviewCard from "./ReviewCard";
import Title from "./Title";

function UserReviews() {
	const userReviews = [
		{
			id: 1,
			fullName: "Alice Smith",
			profession: "Hair Stylist",
			review:
				"Nourishing, promotes healthier hair without damage. Essential for maintaining vibrant locks.",
		},
		{
			id: 2,
			fullName: "Bob Johnson",
			profession: "Fashion Blogger",
			review:
				"Subtle scent, lightweight texture, a staple in grooming routines for its invigorating qualities.",
		},
		{
			id: 3,
			fullName: "Charlie Brown",
			profession: "Makeup Artist",
			review:
				"Preps skin beautifully for makeup. Smooth, hydrated canvas. A must-have in every makeup kit.",
		},
		{
			id: 4,
			fullName: "David Lee",
			profession: "Barber",
			review:
				"Clients love the results! Smooth, manageable hair. This product is a game-changer in grooming.",
		},
		{
			id: 5,
			fullName: "Eve Taylor",
			profession: "Style Consultant",
			review:
				"This grooming product enhances every style. It's a versatile essential for any wardrobe.",
		},
		{
			id: 6,
			fullName: "Frank Williams",
			profession: "Dermatologist",
			review:
				"Impressive formulation, gentle yet effective. A go-to recommendation for maintaining healthy skin.",
		},
	];

	return (
		<div className="p-4">
			<Title title={"Review"} />
			<div className="py-10 overflow-hidden text-white rounded-lg">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
					spaceBetween={50}
					slidesPerView={2}
					autoplay={{ delay: 1500 }}
					loop={true}
					grabCursor={true}
					speed={1000}
					navigation
					className="relative"
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
				>
					{userReviews.map((review) => (
						<SwiperSlide key={review.id}>
							<ReviewCard review={review} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{/* <ReviewCard /> */}
		</div>
	);
}

export default UserReviews;
