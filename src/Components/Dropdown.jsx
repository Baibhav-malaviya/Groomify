import { useState } from "react";
import PropTypes from "prop-types";

function Dropdown({
	children,
	options,
	onSelect,
	bgColor = "bg-red-500",
	color = "text-gray-200",
}) {
	const [selectedOption, setSelectedOption] = useState(null);

	const [isHidden, setIsHidden] = useState(true);

	const handleSelectOption = (e, option) => {
		console.log(option);
		if (typeof option === "string") {
			setSelectedOption(option);
			onSelect(option);
		}
	};

	return (
		<div
			className="relative inline-block"
			onMouseOver={() => setIsHidden(false)}
			onMouseLeave={() => setIsHidden(true)}
		>
			<button
				className={`inline-flex items-center px-4 py-2 font-semibold ${color} ${bgColor}`}
			>
				{selectedOption ? selectedOption : children}
				<svg
					className={`w-4 h-4 ml-2 fill-current transition ${
						isHidden ? "" : "rotate-180"
					}`}
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414zM10 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
					/>
				</svg>
			</button>
			<ul
				className={`absolute pt-3 rounded   shadow-lg ${
					isHidden ? "hidden" : "block"
				}`}
			>
				{options.map((option, idx) => (
					<li
						key={idx}
						onClick={(e) => handleSelectOption(e, option)}
						className={`px-4 py-2  cursor-pointer hover:opacity-85 ${bgColor} ${color}`}
					>
						{/* {option} */}
						{Array.isArray(option) ? (
							<Dropdown options={option} onSelect={() => onSelect}>
								{"Nested"}
							</Dropdown>
						) : (
							option
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

Dropdown.propTypes = {
	children: PropTypes.node,
	// options: PropTypes.arrayOf(
	// 	PropTypes.shape({
	// 		label: PropTypes.string.isRequired,
	// 		value: PropTypes.any.isRequired,
	// 	})
	// ).isRequired,
	options: PropTypes.array.isRequired,
	bgColor: PropTypes.string,
	color: PropTypes.string,
	onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
