import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
function Address({ isSaved, setIsSaved }) {
	const [isOn, setIsOn] = useState(false);

	return (
		<div className="flex flex-col items-center justify-center px-5 ">
			<h1 className="mx-auto text-4xl font-bold">Billing Address</h1>
			<form className="py-5 space-y-5 " onSubmit={(e) => e.preventDefault()}>
				<div className="flex space-x-3 ">
					<Input type={"text"} placeholder="First Name" />
					<Input type={"text"} placeholder="Last Name" />
				</div>

				<div className="flex space-x-3 ">
					<Input type={"text"} placeholder="POST CODE" />
					<Input type={"tel"} placeholder="Phone" />
				</div>
				<Input type={"email"} placeholder="Email" />
				<select
					name="country"
					id="country"
					className="w-full p-3 rounded-lg ring-2 ring-teal-700"
				>
					<option value="India">India</option>
					<option value="Canada">Canada</option>
					<option value="Australia">Australia</option>
					<option value="USA">USA</option>
					<option value="Russia">Russia</option>
					<option value="Spain">Spain</option>
					<option value="France">France</option>
				</select>

				<div className="flex space-x-3 ">
					<Input type={"text"} placeholder="State" />
					<Input type={"text"} placeholder="City/Town" />
				</div>
				<Input type={"text"} placeholder="Address" />

				<div className="flex items-center justify-between font-semibold">
					<div className="space-x-2 ">
						{" "}
						<input
							type="radio"
							name="payment"
							id="cash"
							required
							onChange={(e) =>
								e.target.value == "on" ? setIsOn(true) : setIsOn(false)
							}
						/>
						<label htmlFor="cash">Term & Cond. </label>
					</div>
					{isOn && (
						<Button
							type={"submit"}
							bgColor="bg-teal-800 "
							color="text-white"
							onClick={() => setIsSaved(true)}
						>
							{isSaved ? "Saved" : "Save"}
						</Button>
					)}
				</div>
			</form>
		</div>
	);
}

export default Address;
