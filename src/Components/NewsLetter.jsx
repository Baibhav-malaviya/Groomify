import Button from "./Button";

function NewsLetter() {
	const title = "Our Newsletter".split("");
	return (
		<div className="p-10">
			<div className="text-center my-10">
				{title.map((el, idx) => {
					return (
						<span
							className={`p-2 px-4 text-3xl font-bold uppercase  mx-1 rounded-lg  ${
								el === " "
									? "bg-transparent"
									: "bg-teal-300 shadow-lg shadow-teal-800"
							}`}
							key={idx}
						>
							{el}
						</span>
					);
				})}
			</div>
			<div className="text-center my-16 space-y-5">
				<p className="text-xl text-stone-600 font-semibold">
					Promotion new products and sales. Directly to your inbox
				</p>
				<div className=" py-4 inline-flex space-x-3">
					<input
						type="text"
						name=""
						placeholder="Enter your email..."
						id=""
						className=" p-4 w-[300px] rounded-lg bg-teal-200/50"
					/>
					<Button bgColor="bg-teal-800" color="text-white">
						Subscribe
					</Button>
				</div>
			</div>
		</div>
	);
}

export default NewsLetter;
