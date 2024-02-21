import Input from "../Components/Input";
import Title from "../Components/Title";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
function Contact() {
	return (
		<>
			<Title title={"Contact Page"} />
			<div
				className={`w-full flex sm:max-h-[450px] sm:h-auto px-2 sm:px-10 h-60 py-5 sm:flex-row flex-col `}
			>
				<div className="w-1/2 ">
					<div className={`w-full px-5  `}>
						<form className="flex flex-col w-full space-y-6">
							<Input
								type={"text"}
								color="text-stone-800"
								placeholder="Enter your name "
								label="Full Name: "
							/>
							<Input
								placeholder="Enter your email "
								type={"email"}
								color="text-stone-800 "
								label="Email: "
							/>
							<Input
								placeholder="Subject "
								type={"text"}
								color="text-stone-800 "
								label="Subject: "
							/>

							<textarea
								placeholder="Enter your message..."
								rows="4"
								cols="50"
								className={` rounded  grow ring-2 ring-teal-700  p-5 focus:shadow-md focus:outline-none focus:ring-1 focus:ring-primary-200 focus:ring-offset-1 `}
							/>

							<Button bgColor="bg-teal-700" color="text-white">
								Send Message
							</Button>
						</form>
					</div>
				</div>
				<div className="w-1/2">
					<img
						className="w-full h-full font-mono scale-90"
						src="/logo-groomify.jpg"
						alt=""
					/>
				</div>
			</div>
		</>
	);
}

export default Contact;
