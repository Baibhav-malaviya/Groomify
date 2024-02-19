import { Instagram } from "lucide-react";
import Logo from "./Logo";

function Footer() {
	return (
		<div className="h-80 bg-teal-600 flex justify-around items-center px-10">
			<div className="flex flex-col space-y-2">
				<Logo />
				<p>Enjoy the biggest sale of your life</p>
				<div>
					<span className="hover:text-teal-200">
						<Instagram />
					</span>
				</div>
			</div>
			<div className="flex flex-col space-y-2">
				<h1 className="text-xl font-semibold my-2">About</h1>
				<p>About us</p>
				<p>Customer support</p>
				<p>Support Center</p>
			</div>
			<div className="flex flex-col space-y-2">
				<h1 className="text-xl font-semibold my-2">Our services</h1>
				<p>shop</p>
				<p>Discounts</p>
				<p> Shipping made</p>
			</div>
			<div className="flex flex-col space-y-2">
				<h1 className="text-xl font-semibold my-2">Our Company</h1>
				<p>About us</p>
				<p>Contact Us</p>
				<p>About us </p>
			</div>
		</div>
	);
}

export default Footer;
