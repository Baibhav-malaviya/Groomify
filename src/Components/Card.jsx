import { formatCurrency, formatName } from "../Helper/Formatter";

function Card({ item }) {
	// const item = {
	// 	price: 25,
	// 	size: 200,
	// 	ingredients: ["sandalwood", "turmeric", "Aelovera"],
	// 	imageUri: "",
	// 	desc: "For babies | 3 in 1 | Hair, face, body ",
	// };
	return (
		<div className="flex flex-col h-auto w-72   rounded overflow-hidden hover:cursor-pointer hover:scale-105 transition-all shadow shadow-teal-500">
			<div className=" overflow-hidden h-72  row-span-8 rows">
				<img className="aspect-square " src="/logo-groomify.jpg" alt="" />
			</div>
			<div className="flex flex-col space-y-2 p-2 ">
				<div>
					<span className="font-semibold">{formatCurrency(item.price)}</span>
				</div>

				<div className="space-x-2 flex items-center">
					<span>{item.size}ml</span>
					<span className="font-bold">|</span>
					<span>{formatCurrency(item.price / item.size)} / ml</span>
				</div>

				<div className="gap-2 flex flex-wrap ">
					{item.ingredients.map((ing, idx) => (
						<span
							className="p-[3px] text-sm font-semibold text-teal-800 bg-teal-400/80 rounded"
							key={idx}
						>
							{formatName(ing)}
						</span>
					))}
				</div>

				<div className="text-sm text-stone-600">{item.desc}</div>
			</div>
		</div>
	);
}

export default Card;
