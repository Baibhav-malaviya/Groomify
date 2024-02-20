import Footer from "./Footer";
import Navbar from "./Navbar";
import Main from "./Main";

function Layout() {
	return (
		<div className="min-h-screen ">
			<Navbar />

			<Main />
			<Footer />
		</div>
	);
}

export default Layout;
