import { useId } from "react";
import PropTypes from "prop-types";

function Input({
	name,
	type,
	placeholder = "",
	label = "",
	className = "",
	bgColor = "#FFFFFF",
	color = "text-white",
	width = "w-full",
	focus = true,
	onChange,
	value,
	...props
}) {
	const id = useId();

	return (
		<div
			className={` bg-inherit h-auto flex flex-col md:flex-row md:items-center md:justify-between space-y-2  ${width}`}
		>
			<div className="flex justify-between w-40 ">
				<label
					htmlFor={id}
					className={`h-auto font-bold text-base  cursor-pointer ${color}`}
				>
					{label}
				</label>
			</div>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				name={name}
				{...props}
				className={`h-10 rounded  grow ring-2 ring-teal-700  px-2 ${
					focus
						? " focus:shadow-md focus:outline-none focus:ring-1 focus:ring-primary-200 focus:ring-offset-1  "
						: " "
				} ${className}  ${bgColor} `}
			/>
		</div>
	);
}

Input.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	className: PropTypes.string,
	bgColor: PropTypes.string,
	color: PropTypes.string,
	width: PropTypes.string,
	focus: PropTypes.bool,
	onChange: PropTypes.func,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
