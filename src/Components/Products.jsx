import Card from "./Card";
import Title from "./Title";

function Products() {
	const products = [
		{
			id: 1,
			name: "Oil",
			price: 239,
			size: 250,
			quantity: 1,
			ingredients: ["Coconut"],
			imageUri: "/product_coconut_oil.jpg",
			desc: "Experience pure, organic goodness with our budget-friendly Coconut Oil. Cruelty-free and versatile, it's perfect for cooking, skincare, and haircare. Embrace nature's nourishment affordably. ",
		},
		{
			id: 2,
			name: "Coconut Serum",
			price: 389,
			size: 200,
			quantity: 1,
			ingredients: ["Coconut"],
			imageUri: "/product_coconut_serum.jpg",
			desc: "Introducing our Coconut Serum: Pure, organic, and budget-friendly. Unlocking nature's beauty secrets for radiant skin and hair. Ethically crafted, cruelty-free, and under budget for your wellness journey.",
		},
		{
			id: 3,
			name: "Soap",
			price: 140,
			size: 200,
			quantity: 1,
			ingredients: ["shea butter", "turmeric"],
			imageUri: "/product_soap.jpg",
			desc: "Introducing our Turmeric and Shea Butter Serum: A harmonious blend of nature's wonders. Infused with turmeric's healing power and shea butter's nourishment. Ethically crafted, cruelty-free, and budget-friendly for your skincare regime.",
		},
		{
			id: 4,
			name: "Shaving Kit",
			price: 289,
			size: 280,
			quantity: 1,
			ingredients: ["Aelovera", "turmeric"],
			imageUri: "/blog_5.jpg",
			desc: "Introducing our Turmeric and Shea Butter Serum: A harmonious blend of nature's wonders. Infused with turmeric's healing power and shea butter's nourishment. Ethically crafted, cruelty-free, and budget-friendly for your skincare regime.",
		},
		{
			id: 5,
			name: "Skin Care Kit",
			price: 1189,
			size: 600,
			quantity: 1,
			ingredients: ["Aelovera", "Turmeric", "Sandalwood"],
			imageUri: "/blog_6.jpg",
			desc: "Introducing our Turmeric and Shea Butter Serum: A harmonious blend of nature's wonders. Infused with turmeric's healing power and shea butter's nourishment. Ethically crafted, cruelty-free, and budget-friendly for your skincare regime.",
		},
		{
			id: 6,
			name: "All in One ",
			price: 1189,
			size: 600,
			quantity: 1,
			ingredients: ["Aelovera", "Turmeric", "Sandalwood"],
			imageUri: "/poster_2.jpg",
			desc: "Introducing our Turmeric and Shea Butter Serum: A harmonious blend of nature's wonders. Infused with turmeric's healing power and shea butter's nourishment. Ethically crafted, cruelty-free, and budget-friendly for your skincare regime.",
		},
	];
	return (
		<div className="mx-24 my-5 space-y-4">
			<div className="my-20 text-center">
				<Title title={"Products"} />
			</div>

			<div className="flex flex-wrap items-center justify-start gap-5 px-20">
				{products.map((item, idx) => (
					<Card key={idx} item={item} />
				))}
			</div>
		</div>
	);
}

export default Products;
