import { Link } from "react-router-dom";

function Logo() {
	return (
		<div className="inline-flex ">
			<Link
				to={"/"}
				className="flex items-center justify-center space-x-2 transition-all hover:scale-105"
			>
				<img
					className="w-10 rounded aspect-square "
					src="/logo-groomify.jpg"
					alt=""
				/>
				<p className="text-2xl font-semibold text-white">
					<span className="text-4xl font-semibold text-teal-900">G</span>
					roomify
				</p>
			</Link>
		</div>
	);
}

export default Logo;
