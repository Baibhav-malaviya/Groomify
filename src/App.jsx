import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import SignIn from "./Pages/Signin";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/products" element={<ProductPage />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="*" element={<PageNotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
