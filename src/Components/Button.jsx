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
			className={`px-4 py-2 font-bold rounded hover:scale-105 transition-all ${bgColor} ${width} ${color} ${className} ${props}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
