import { Cross, Heart, Search, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Row from "./Row";
import SignUp from "./Signup";

function Navbar({ setIsRegisterOpen, isRegisterOpen }) {
	const [isOpen, setIsOpen] = useState(false);

	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 120) {
				// You can adjust this value based on when you want the navbar to become sticky
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={` top-0 left-0 right-0 z-50 ${isSticky ? "sticky " : ""}`}>
			<Row
				navbar={true}
				bgColor="bg-teal-600"
				tailwindClasses="border-b-[1px] "
			>
				<Logo />
				<Row width="w-auto" bgColor="bg-transparent" padding={false}>
					<ul className="flex space-x-5 text-lg font-semibold text-white">
						<NavLink to={"/"}>Home</NavLink>
						<NavLink to={"/products"}>Shop</NavLink>
						<NavLink to={"/blog"}>Blog</NavLink>
						<NavLink to={"/faq"}>Faq's</NavLink>
						<NavLink to={"/contact"}>Contact</NavLink>
						<NavLink to={"/cart"}>Cart</NavLink>
					</ul>
				</Row>
				<Row
					bgColor="bg-transparent"
					width="w-auto"
					color="text-white"
					tailwindClasses="space-x-3"
				>
					<span onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <Cross className="rotate-45" /> : <Search />}
					</span>
					<span onClick={() => setIsRegisterOpen(!isRegisterOpen)}>
						<User />
					</span>
					<span>
						<Heart />
					</span>
					<span>
						<ShoppingCart />
					</span>
				</Row>
			</Row>
			<SearchBar isOpen={isOpen} />
			{/* {isOpen && <SearchBar />} */}
		</div>
	);
}

export default Navbar;
