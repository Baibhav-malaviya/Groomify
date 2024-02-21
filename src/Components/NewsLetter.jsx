import Button from "./Button";
import Title from "./Title";

function NewsLetter() {
	return (
		<div className="p-10">
			<div className="text-center ">
				<Title title={"Our Newsletter"} />
			</div>
			<div className="space-y-12 text-center ">
				<p className="mt-16 text-xl font-semibold text-stone-600">
					Promotion new products and sales. Directly to your inbox
				</p>
				<div className="inline-flex py-4 space-x-3 ">
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
