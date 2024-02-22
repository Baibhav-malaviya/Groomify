import { Cross } from "lucide-react";
import PropTypes from "prop-types";
import { formatCurrency } from "../Helper/Formatter";
import { remove } from "../cartSlice";

import { useDispatch } from "react-redux";
import UpdateItem from "./UpdateItem";

function CartCard({ item }) {
	const dispatch = useDispatch();

	const divStyle = "flex items-center justify-center  ";
	return (
		<li className="p-2 list-none first:border-b-0 border-b-1">
			<div className="grid w-full h-24 grid-cols-9 ">
				<div className={`  col-span-2 ${divStyle}`}>
					<img
						src={item.imageUri}
						className="inline w-[80px] aspect-square bg-teal-700"
						alt=""
					/>
				</div>
				<div className={`col-span-2 font-semibold ${divStyle}`}>
					{item.name}
				</div>
				<div className={`col-span-1 ${divStyle}`}>
					{formatCurrency(item.price)}
				</div>
				<div className={`col-span-2 ${divStyle} space-x-4`}>
					<UpdateItem id={item.id} quantity={item.quantity} />
				</div>
				<div className={`col-span-1 ${divStyle}`}>
					{formatCurrency(item.quantity * item.price)}
				</div>
				<div className={`col-span-1 ${divStyle}`}>
					<button onClick={() => dispatch(remove(item.id))}>
						<Cross fill="red" className="rotate-45" />
					</button>
				</div>
			</div>
		</li>
	);
}

CartCard.propTypes = {
	item: PropTypes.object,
};

export default CartCard;
