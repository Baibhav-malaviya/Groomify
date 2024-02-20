import Logo from "../Components/Logo";
import { Bug } from "lucide-react";

function PageNotFound() {
	return (
		<div className="p-40 space-y-4 text-3xl text-center text-teal-500 bg-teal-200">
			<Logo />
			<div className="flex items-center justify-center space-x-2 text-center">
				<Bug size={40} color="red" />
				<p className="">Error 404, Page Not found</p>
				<Bug size={40} color="red" />
			</div>
		</div>
	);
}

export default PageNotFound;
