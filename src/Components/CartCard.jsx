import { Cross, Minus, Plus } from "lucide-react";
import PropTypes from "prop-types";
import { formatCurrency } from "../Helper/Formatter";
import {
	remove,
	increaseItemQuantity,
	decreaseItemQuantity,
} from "../cartSlice";

import { useDispatch } from "react-redux";
import UpdateItem from "./UpdateItem";

function CartCard({ item }) {
	const dispatch = useDispatch();

	const handleIncrease = (e, id) => {
		e.preventDefault();
		console.log("Inside the handleIncrease function");
		dispatch(increaseItemQuantity(id));
	};

	const divStyle = "flex items-center justify-center  ";
	return (
		<li className="p-2 list-none first:border-b-0 border-b-1">
			{/* <div className="grid w-full h-24 grid-cols-9 font-bold capitalize border-b-2">
				<div className={`  col-span-2 ${divStyle}`}>product</div>
				<div className={`col-span-2 ${divStyle}`}>Name</div>
				<div className={`col-span-1 ${divStyle}`}>Price</div>
				<div className={`col-span-2 ${divStyle}`}>Quantity</div>
				<div className={`col-span-1 ${divStyle}`}>Total</div>
				<div className={`col-span-1 ${divStyle}`}>Handle</div>
			</div> */}
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
					<button onClick={(e) => dispatch(remove(item.id))}>
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
