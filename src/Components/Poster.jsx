import PropTypes from "prop-types";

function Poster({ poster }) {
	const { slogan, imageUri } = poster;

	return (
		<div>
			<div className="relative flex items-center overflow-hidden h-80 bg-gradient-to-r from-teal-950 via-teal-300 to-teal-100">
				<div className="w-2/3"></div>
				<div className="w-1/3 scale-125">
					{" "}
					<img
						className="w-auto h-[450px] border-[20px] border-white rounded-full"
						src={imageUri}
						alt=""
					/>
				</div>
				<h2 className="uppercase absolute font-display left-[35%] -translate-x-[50%] text-4xl p-2 font-extrabold text-white w-1/2 h-auto">
					{slogan}
				</h2>
			</div>
		</div>
	);
}

Poster.propTypes = {
	poster: PropTypes.object,
};

export default Poster;
