import PropTypes from "prop-types";
function Button({
	children,
	width = "auto",
	bgColor = "bg-orange-500",
	color = "text-stone-800",
	className,
	onClick,
	...props
}) {
	return (
		<button
			className={`px-4 py-2 font-bold rounded hover:scale-105 transition-all duration-200 ${bgColor} ${width} ${color} ${className} ${props}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.node,
	width: PropTypes.string,
	bgColor: PropTypes.string,
	color: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
