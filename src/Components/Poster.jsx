import PropTypes from "prop-types";
import { Truck, Wallet, ShoppingBasket, ArrowLeftRight } from "lucide-react";

function Poster({ poster }) {
	const { slogan, imageUri } = poster;

	return (
		<div>
			<div className="flex items-center justify-around h-20 mt-2 text-teal-800 bg-teal-200/50">
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
						className="w-auto h-[450px] border-[20px] border-white rounded-full"
						src={imageUri}
						onError="this.src='/logo-groomify.jpg';"
						alt=""
					/>
				</div>
				<h2 className="uppercase absolute font-display left-[35%] -translate-x-[50%] text-4xl p-2 font-extrabold text-white w-1/2 h-auto">
					{slogan}
				</h2>
			</div>
		</div>
	);
}

Poster.propTypes = {
	poster: PropTypes.object,
};

export default Poster;
