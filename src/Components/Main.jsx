import { Outlet } from "react-router-dom";

function Main() {
	return (
		<div className="bg-white min-h-[500px]">
			<Outlet />
		</div>
	);
}

export default Main;
