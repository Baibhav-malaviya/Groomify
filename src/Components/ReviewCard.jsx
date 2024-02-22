import PropTypes from "prop-types";

import { Quote } from "lucide-react";
import Rated from "./Rated";

function ReviewCard({ review }) {
	return (
		<div className="flex flex-col p-4  bg-stone-800 rounded-lg w-[600px]">
			<p className="p-2 pb-4 border-b-2 text-md ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
				temporibus voluptatem. Deleniti quisquam maiores animi
			</p>
			<div className="grid grid-cols-7 pr-8 mt-2">
				<div className="col-span-2 p-2 ">
					<img className="" src="/logo-groomify.jpg" alt="" />
				</div>
				<div className="flex flex-col justify-between col-span-4 p-2 pb-4 ">
					<p className="text-3xl font-semibold text-white">{review.fullName}</p>
					<p className="text-lg text-stone-400">{review.profession}</p>
					<Rated />
				</div>
				<div className="flex items-center justify-center col-span-1 p-2 ">
					<Quote className="ml-2 " size={40} />
				</div>
			</div>
		</div>
	);
}

ReviewCard.propTypes = {
	review: PropTypes.object,
};

export default ReviewCard;
