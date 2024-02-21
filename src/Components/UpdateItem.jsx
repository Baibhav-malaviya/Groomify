import { useDispatch } from "react-redux";
// import Button from "../../ui/Button";
import { increaseItemQuantity, decreaseItemQuantity } from "../cartSlice";
import { Minus, Plus } from "lucide-react";
function UpdateItem({ id, quantity }) {
	const dispatch = useDispatch();
	return (
		<div className="flex gap-3">
			<button
				className="p-[2px] px-2 bg-teal-200 rounded-full"
				onClick={() => dispatch(decreaseItemQuantity(id))}
			>
				<Minus />
			</button>
			<span className="font-mono font-semibold">{quantity}</span>
			<button
				className="p-[2px] px-2 bg-teal-200 rounded-full"
				onClick={() => dispatch(increaseItemQuantity(id))}
			>
				<Plus />
			</button>
			{/* <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
				+
			</Button> */}
		</div>
	);
}

export default UpdateItem;
