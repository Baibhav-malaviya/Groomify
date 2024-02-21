import { Star } from "lucide-react";
import PropTypes from "prop-types";

function Rated({ givenStar = 4 }) {
	return (
		<div className="flex">
			{Array.from({ length: givenStar }).map((_, idx) => (
				<Star key={idx} fill="green" />
			))}
			{Array.from({ length: 5 - givenStar }).map((_, idx) => (
				<Star key={idx} />
			))}
		</div>
	);
}

Rated.propTypes = {
	givenStar: PropTypes.number,
};

export default Rated;
