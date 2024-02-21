import Card from "./Card";

function Products() {
	const title = "PRODUCTS".split("");
	const products = [
		{
			id: 1,
			name: "Soap",
			price: 150,
			size: 200,
			quantity: 1,
			ingredients: ["sandalwood", "turmeric", "Aelovera"],
			imageUri: "",
			desc: "For babies | 3 in 1 | Hair, face, body ",
		},
		{
			id: 2,
			name: "Detergent",
			price: 80,
			size: 200,
			quantity: 1,
			ingredients: ["sandalwood", "turmeric", "Aelovera"],
			imageUri: "",
			desc: "For babies | 3 in 1 | Hair, face, body ",
		},
		{
			id: 3,
			name: "Moisturizer",
			price: 140,
			size: 200,
			quantity: 1,
			ingredients: ["shea butter", "turmeric", "Aelovera"],
			imageUri: "",
			desc: "For babies | 3 in 1 | Hair, face, body ",
		},
	];
	return (
		<div className="my-5 space-y-4 ">
			<div className="my-10 text-center">
				{title.map((el, idx) => {
					if (el !== " ") {
						return (
							<span
								className="p-2 px-4 mx-1 text-3xl font-bold bg-teal-300 rounded-lg shadow-lg shadow-teal-800"
								key={idx}
							>
								{el}
							</span>
						);
					}
				})}
			</div>

			<div className="grid grid-cols-3 px-10">
				{products.map((item, idx) => (
					<Card key={idx} item={item} />
				))}
			</div>
		</div>
	);
}

export default Products;
