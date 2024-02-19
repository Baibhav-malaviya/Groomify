import { Truck, Wallet, ShoppingBasket, ArrowLeftRight } from "lucide-react";

function Poster() {
	return (
		<div>
			<div className="flex items-center justify-around h-20 text-teal-800 bg-teal-200/50 mt-14">
				<div className="flex space-x-2">
					<span>
						<Truck />
					</span>
					<p>Fast delivery</p>
				</div>
				<div className="flex space-x-2">
					<span>
						<Wallet />
					</span>
					<p>Cost effective</p>
				</div>
				<div className="flex space-x-2">
					<span className="w-auto h-auto">
						<ShoppingBasket />
					</span>
					<p>Pure Organic</p>
				</div>
				<div className="flex space-x-2">
					<span className="w-auto h-auto">
						<ArrowLeftRight />
					</span>
					<p>30 Day Return</p>
				</div>
			</div>
			<div className="relative flex items-center overflow-hidden h-80 bg-gradient-to-r from-teal-900 via-teal-300 to-teal-100">
				<div className="w-2/3"></div>
				<div className="w-1/3 scale-125">
					{" "}
					<img
						className="w-auto h-auto border-[20px] border-white rounded-full"
						src="/logo-groomify.jpg"
						alt=""
					/>
				</div>
				<h2 className="uppercase absolute left-[35%] -translate-x-[50%] text-4xl font-bold text-white w-1/2 h-auto">
					Cleaning products with no harmful products
					<button className="px-4 py-3 m-5 text-xl font-semibold rounded bg-stone-800">
						Start shopping
					</button>
				</h2>
			</div>
		</div>
	);
}

export default Poster;
