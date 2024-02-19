import PropTypes from "prop-types";
function Column({
	children,
	width = "w-auto",
	height = "h-auto",
	bgColor = "bg-orange-600",
	color = "text-black",
	tailwindClasses = "",
	hover = true,
	onClick,
	hoverClasses = "hover:scale-105 hover:opacity-90 hover:shadow-md",
	...props
}) {
	return (
		<div
			className={`inline-flex flex-col p-3 space-y-2 ${height} ${width} ${bgColor} ${tailwindClasses} ${color} ${
				hover ? hoverClasses : ""
			} `}
			onClick={onClick}
			{...props}
		>
			{children}
		</div>
	);
}

Column.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	hoverClasses: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	bgColor: PropTypes.string,
	color: PropTypes.string,
	tailwindClasses: PropTypes.string,
	hover: PropTypes.bool,
};

export default Column;
