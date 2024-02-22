import { useSelector } from "react-redux";
import CartCard from "../Components/CartCard";
import Title from "../Components/Title";
import TotalBill from "../Components/TotalBill";
import Alert from "../Components/Alert";
import { useState } from "react";

function Cart() {
	const { cart } = useSelector((state) => state.cart);
	const [isPaid, setIsPaid] = useState(false);
	const divStyle = "flex items-center justify-center p-2 text-2xl";

	return (
		<div className="px-20">
			<Title title="your cart" />
			{cart.length > 0 && (
				<div className="">
					<div className="grid w-full h-24 grid-cols-9 font-bold capitalize">
						<div className={`col-span-2 ${divStyle}`}>product</div>
						<div className={`col-span-2 ${divStyle}`}>Name</div>
						<div className={`col-span-1 ${divStyle}`}>Price</div>
						<div className={`col-span-2 ${divStyle}`}>Quantity</div>
						<div className={`col-span-1 ${divStyle}`}>Total</div>
						<div className={`col-span-1 ${divStyle}`}>Handle</div>
					</div>
				</div>
			)}
			<div className="">
				{cart.map((item) => (
					<CartCard item={item} key={item.id} />
				))}
				<TotalBill setIsPaid={setIsPaid} />
				<Alert isPaid={isPaid} setIsPaid={setIsPaid} />
			</div>
		</div>
	);
}

export default Cart;
