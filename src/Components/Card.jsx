import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { formatCurrency, formatName } from "../Helper/Formatter";
import Button from "../Components/Button";
import { add } from "../cartSlice";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function Card({ item }) {
	const { cart } = useSelector((state) => state.cart);

	const added = cart.some((el) => el.id === item.id);

	const dispatch = useDispatch();
	const addToCart = (e, item) => {
		e.preventDefault();
		dispatch(add(item));
	};
	return (
		<div className="relative flex flex-col h-auto overflow-hidden transition-all rounded shadow group w-72 hover:cursor-pointer shadow-teal-500">
			<div className="overflow-hidden h-72 row-span-8 rows">
				<img className="aspect-square " src={item.imageUri} alt="" />
			</div>
			<div className="flex flex-col p-2 space-y-2 ">
				<div className="flex items-center justify-between py-[2px]">
					<span className="font-semibold">{formatCurrency(item.price)}</span>
					{!added ? (
						<Button
							width="w-auto"
							bgColor="bg-teal-800"
							color="text-white"
							onClick={(e) => addToCart(e, item)}
							className={" translate-x-[110%] group-hover:translate-x-0"}
						>
							{" "}
							+ Add to Cart
						</Button>
					) : (
						<Button
							width="w-auto"
							color="text-black"
							bgColor="bg-teal-300"
							className={" translate-x-[110%] group-hover:translate-x-0"}
						>
							<Link to={"/cart"}>+ Go to Cart</Link>
						</Button>
					)}
				</div>

				<div className="flex items-center space-x-2">
					<span>{item.size}ml</span>
					<span className="font-bold">|</span>
					<span>{formatCurrency(item.price / item.size)} / ml</span>
				</div>

				<div className="text-lg font-semibold">{formatName(item.name)}</div>

				<div className="flex flex-wrap gap-2 ">
					{item.ingredients.map((ing, idx) => (
						<span
							className="p-[3px] px-2 text-sm font-semibold text-teal-800 bg-teal-400/80 rounded"
							key={idx}
						>
							{formatName(ing)}
						</span>
					))}
				</div>

				<Heart className="absolute right-4 bottom-2" />
			</div>
		</div>
	);
}

Card.propTypes = {
	item: PropTypes.object,
};

export default Card;
