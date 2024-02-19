import Card from "./Card";

function Products() {
	const title = "PRODUCTS".split("");
	const products = [
		{
			name: "Soap",
			price: 150,
			size: 200,
			ingredients: ["sandalwood", "turmeric", "Aelovera"],
			imageUri: "",
			desc: "For babies | 3 in 1 | Hair, face, body ",
		},
		{
			name: "Detergent",
			price: 80,
			size: 200,
			ingredients: ["sandalwood", "turmeric", "Aelovera"],
			imageUri: "",
			desc: "For babies | 3 in 1 | Hair, face, body ",
		},
		{
			name: "Moisturizer",
			price: 140,
			size: 200,
			ingredients: ["shea butter", "turmeric", "Aelovera"],
			imageUri: "",
			desc: "For babies | 3 in 1 | Hair, face, body ",
		},
	];
	return (
		<div className=" space-y-4 my-5">
			<div className="text-center my-10">
				{title.map((el, idx) => {
					if (el !== " ") {
						return (
							<span
								className="p-2 px-4 text-3xl font-bold bg-teal-300 mx-1 rounded-lg shadow-lg shadow-teal-800"
								key={idx}
							>
								{el}
							</span>
						);
					}
				})}
			</div>

			<div className="grid px-10  grid-cols-3">
				{products.map((item, idx) => (
					<Card key={idx} item={item} />
				))}
			</div>
		</div>
	);
}

export default Products;
