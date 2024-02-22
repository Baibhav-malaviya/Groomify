import Card from "./Card";
import Title from "./Title";

function Products() {
	const products = [
		{
			id: 1,
			name: "Sheet Mask",
			price: 449,
			size: 100,
			quantity: 1,
			ingredients: ["Aloe vera", "Bamboo", "..."],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708582439/Groomify/product_01_qmkycs.jpg",
			desc: "refresh and rejuvenate with our organic sheet mas",
		},
		{
			id: 2,
			name: "Facial OIl",
			price: 589,
			size: 30,
			quantity: 1,
			ingredients: ["Almond"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708582328/Groomify/product_02_mqcohu.jpg",
			desc: "  Radiant skin in a drop of oil",
		},
		{
			id: 3,
			name: "Vitamin C Serum",
			price: 549,
			size: 30,
			quantity: 1,
			ingredients: ["Aqua / Water", "Glycerin"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708582315/Groomify/product_03_t6plme.jpg",
			desc: "Radiant Skin, Vitamin C Within",
		},
		{
			id: 4,
			name: "Hydrating Face Moisturizer",
			price: 699,
			size: 80,
			quantity: 1,
			ingredients: ["Glycerin"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708582301/Groomify/product_04_hjf87d.jpg",
			desc: "Quench Your Skin’s Thirst with our face moisturizer",
		},
		{
			id: 5,
			name: "Dry Shampoo",
			price: 329,
			size: 200,
			quantity: 1,
			ingredients: ["Onion Oil"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708582289/Groomify/product_05_goudre.jpg",
			desc: "Revive your roots with our plant-based dry shampoo",
		},
		{
			id: 6,
			name: "Bamboo Hair Brush",
			price: 299,
			size: null,
			quantity: 1,
			ingredients: ["Bamboo"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708582279/Groomify/product_06_ur9gss.jpg",
			desc: "Brush with nature with our bamboo hairbrush	.",
		},
		{
			id: 7,
			name: "Biodegradable razors ",
			price: 1089,
			size: null,
			quantity: 1,
			ingredients: ["Bamboo"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708582267/Groomify/product_07_i2cvkr.jpg",
			desc: "Go green, stay smooth with our disposable biodegradable razors.",
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
