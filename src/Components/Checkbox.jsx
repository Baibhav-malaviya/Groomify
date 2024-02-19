import { useId } from "react";
import PropTypes from "prop-types";
function Checkbox({ children, onChange, checked }) {
	const id = useId();

	return (
		<div className="inline-flex w-auto h-auto space-x-2 hover:cursor-pointer">
			<input
				type="checkbox"
				id={id}
				className="w-5 h-5 hover:cursor-pointer"
				onChange={onChange}
				checked={checked}
			/>

			{children && (
				<label className="hover:cursor-pointer" htmlFor={id}>
					{children}
				</label>
			)}
		</div>
	);
}

Checkbox.propTypes = {
	children: PropTypes.node,
	onChange: PropTypes.func,
	checked: PropTypes.bool,
};

export default Checkbox;
