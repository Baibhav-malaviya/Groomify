import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Main from "./Main";
import SignUp from "./Signup";
function Layout({ children }) {
	const [isRegisterOpen, setIsRegisterOpen] = useState(true);
	return (
		<div className="min-h-screen ">
			<Navbar
				setIsRegisterOpen={setIsRegisterOpen}
				isRegisterOpen={isRegisterOpen}
			/>

			<SignUp isRegisterOpen={isRegisterOpen} />
			<Main />
			<Footer />
		</div>
	);
}

export default Layout;
