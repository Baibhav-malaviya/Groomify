import PropTypes from "prop-types";

function Row({
	children,
	width = "w-full",
	bgColor = "bg-orange-600",
	color = "text-black",
	tailwindClasses = "",
	padding = true,
	flex = false,
	hover = false,
	onClick,
	navbar = true,
	hoverClasses = "hover:scale-105 hover:opacity-90 hover:shadow-md",
	...props
}) {
	if (navbar)
		return (
			<nav
				className={`h-auto px-3  flex   gap-2 items-center justify-between ${tailwindClasses} ${bgColor} ${color} ${width} ${
					hover ? hoverClasses : ""
				} ${flex ? "flex-wrap" : ""} ${padding && "py-2 "}`}
				onClick={onClick}
				{...props}
			>
				{children}
			</nav>
		);

	return (
		<div
			className={`h-auto px-3  flex   gap-2 items-center justify-between ${tailwindClasses} ${bgColor} ${color} ${width} ${
				hover ? hoverClasses : ""
			} ${flex ? "flex-wrap" : ""} ${padding && "py-2 "}`}
			onClick={onClick}
			{...props}
		>
			{children}
		</div>
	);
}

Row.propTypes = {
	children: PropTypes.node.isRequired,
	flex: PropTypes.bool,
	navbar: PropTypes.bool,
	padding: PropTypes.bool,
	onClick: PropTypes.func,
	hoverClasses: PropTypes.string,
	width: PropTypes.string,
	bgColor: PropTypes.string,
	color: PropTypes.string,
	tailwindClasses: PropTypes.string,
	hover: PropTypes.bool,
};

export default Row;
