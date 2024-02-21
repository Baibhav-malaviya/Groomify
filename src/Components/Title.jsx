import PropTypes from "prop-types";
function Title({ title }) {
	const titleArr = title.split("");
	return (
		<div className="my-10 text-center">
			{titleArr.map((el, idx) => {
				return (
					<span
						className={`p-2 px-4 text-3xl font-bold uppercase  mx-1 rounded-lg  ${
							el === " "
								? "bg-transparent"
								: "bg-teal-300 shadow-lg shadow-teal-800"
						}`}
						key={idx}
					>
						{el}
					</span>
				);
			})}
		</div>
	);
}

Title.propTypes = {
	title: PropTypes.string,
};

export default Title;
