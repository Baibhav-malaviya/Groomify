import Input from "../Components/Input";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
function SignUp() {
	return (
		<div
			className={`w-full flex sm:max-h-[450px] sm:h-auto px-2 sm:px-10 h-60 py-5 sm:flex-row flex-col `}
		>
			<div className="w-1/2 ">
				<div className={`w-full px-5 py-10 `}>
					<div className="w-full mb-10">
						<h1 className="text-3xl font-bold text-center ">
							Lorem ipsum dolor, sit amet sit.{" "}
						</h1>
						<p className="my-5 text-center">
							Already a user?{" "}
							<Link
								to={"/signIn"}
								className="px-3 hover:underline text-cyan-500"
							>
								SignIn
							</Link>
						</p>
					</div>
					<form className="flex flex-col w-full space-y-3">
						<Input
							placeholder="Enter your name "
							type={"text"}
							color="text-stone-800 "
							label="Full Name: "
						/>
						<Input
							placeholder="Enter your email "
							type={"email"}
							color="text-stone-800 "
							label="Email: "
						/>
						<Input
							type={"password"}
							label="Password: "
							color="text-stone-800 "
							placeholder="Enter your password"
						/>
						<Button bgColor="bg-teal-700">Sign Up</Button>
					</form>
				</div>
			</div>
			<div className="w-1/2">
				<img
					className="w-full h-full scale-90"
					src="public/logo-groomify.jpg"
					alt=""
				/>
			</div>
		</div>
	);
}

export default SignUp;
