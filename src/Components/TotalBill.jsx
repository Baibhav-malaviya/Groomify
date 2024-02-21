import Input from "./Input";
import { formatCurrency } from "../Helper/Formatter";
import { Link } from "react-router-dom";
import { clearCart } from "../cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Address from "./Address";
import { useState } from "react";

function TotalBill() {
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.cart);
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	const [isSaved, setIsSaved] = useState(false);

	const deliveryCharge = 20;
	const discount = 9;
	const overAll = totalPrice + deliveryCharge - discount;

	if (totalPrice <= 0)
		return (
			<div className="mt-20 text-2xl font-semibold text-center">
				Your cart is Empty{" "}
				<Link
					to={"/products"}
					className="p-2 px-3 text-base text-white bg-teal-800 rounded-lg hover:shadow-xl"
				>
					Shop Now
				</Link>
			</div>
		);

	return (
		<div className="flex items-start justify-between mt-20">
			<Address isSaved={isSaved} setIsSaved={setIsSaved} />

			<div className="flex flex-col items-center justify-center">
				<div className="text-4xl font-bold">Cart Total</div>

				<div className="relative grid w-full grid-rows-5 p-4 px-10 my-5 text-lg bg-gray-200">
					<div className="flex items-center justify-between ">
						<div>Subtotal</div>
						<div>{formatCurrency(totalPrice)}</div>
					</div>
					<div className="flex items-center justify-between">
						<div>Shipping</div>
						<div className="flex flex-col items-center justify-center ">
							<p className="self-end ">Shipping</p>
							<p>To Chitkara</p>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div>Delivery Charge</div>
						<div>{formatCurrency(deliveryCharge)}</div>
					</div>
					<div className="flex items-center justify-between">
						<div>Discount </div>
						<div className="flex items-center justify-center space-x-2">
							<span>-</span>
							<p>{formatCurrency(discount)}</p>
						</div>
					</div>
					<div className="h-[1px] mt-5 bg-teal-800"></div>
					<div className="flex items-center justify-between pb-3 my-2 border-b-[1.5px] border-black">
						<div>Grand Total</div>
						<div>{formatCurrency(overAll)}</div>
					</div>

					<div className="mt-5 space-y-2 text-lg font-semibold">
						<div className="flex items-center space-x-2 ">
							<input type="radio" name="payment" id="upi" />
							<label htmlFor="upi">UPI </label>
						</div>

						<div className="flex items-center space-x-2 ">
							<input type="radio" name="payment" id="bank" />
							<label htmlFor="bank">Direct bant Transfer </label>
						</div>

						<div className="flex items-center space-x-2 ">
							<input type="radio" name="payment" id="card" />
							<label htmlFor="card">Credit/Debit card </label>
						</div>

						<div className="flex items-center space-x-2 ">
							<input type="radio" name="payment" id="cash" />
							<label htmlFor="cash">Pay on delivery </label>
						</div>
					</div>
					<div>
						<button
							className="p-6 py-4 mx-5 mr-auto text-3xl font-semibold uppercase scale-50 border-4 border-teal-800 rounded-full hover:text-white hover:bg-teal-800"
							onClick={() => dispatch(clearCart())}
						>
							Pay & Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TotalBill;
