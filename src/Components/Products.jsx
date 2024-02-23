import Card from "./Card";
import Title from "./Title";

function Products() {
	const products = [
		{
			id: 8,
			name: "Aloe Vera Gel",
			price: 139,
			size: 100,
			quantity: 1,
			ingredients: ["Aloe vera"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708667173/Groomify/product_08_e7irrt.jpg",
			desc: "",
		},
		{
			id: 9,
			name: "Nourishing Shampoo",
			price: 862,
			size: 100,
			quantity: 1,
			ingredients: ["Aloe vera"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708667184/Groomify/product_09_da1an3.jpg",
			desc: "",
		},
		{
			id: 10,
			name: "Anti Dandruff Conditioner",
			price: 893,
			size: 100,
			quantity: 1,
			ingredients: ["Aloe vera"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708667196/Groomify/product_10_jvaxlo.jpg",
			desc: "",
		},
		{
			id: 11,
			name: "Makeup setting spray",
			price: 299,
			size: 60,
			quantity: 1,
			ingredients: ["Aloe vera"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708667201/Groomify/product_11_cahnz5.jpg",
			desc: "",
		},
		{
			id: 12,
			name: "Long wear matte lipstick",
			price: 199,
			size: null,
			quantity: 1,
			ingredients: ["Aloe vera"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708667207/Groomify/product_12_nmlgww.jpg",
			desc: "",
		},
		{
			id: 13,
			name: "Waterproof mascara",
			price: 199,
			size: null,
			quantity: 1,
			ingredients: ["Aloe vera"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708667214/Groomify/product_13_ks5d9j.jpg",
			desc: "",
		},
		{
			id: 14,
			name: "Organic  Sanitary Pads",
			price: 169,
			size: null,
			quantity: 1,
			ingredients: ["Aloe vera"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708667220/Groomify/product_14_ybqpnn.jpg",
			desc: "",
		},
		{
			id: 15,
			name: "Eco-friendly Menstrual cup ",
			price: 149,
			size: null,
			quantity: 1,
			ingredients: ["Aloe vera"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708667225/Groomify/product_15_p9mr81.jpg",
			desc: "",
		},
		{
			id: 16,
			name: "Creamy brush palatte",
			price: 149,
			size: null,
			quantity: 1,
			ingredients: ["Aloe vera"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708667231/Groomify/product_16_ullnyr.jpg",
			desc: "",
		},
		{
			id: 17,
			name: "Freshing body spray",
			price: 149,
			size: 100,
			quantity: 1,
			ingredients: ["Aloe vera"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708667238/Groomify/product_17_ncsuhh.jpg",
			desc: "",
		},
		{
			id: 18,
			name: "Natural Deodorant Wipes",
			price: 449,
			size: null,
			quantity: 1,
			ingredients: ["Aloe vera"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708667243/Groomify/product_18_n5umny.jpg",
			desc: "",
		},
		{
			id: 19,
			name: "Scalp massager",
			price: 199,
			size: null,
			quantity: 1,
			ingredients: ["Aloe vera"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708667250/Groomify/product_19_ijetqy.jpg",
			desc: "",
		},
		{
			id: 20,
			name: "Hair Growth Serum",
			price: 699,
			size: 30,
			quantity: 1,
			ingredients: ["Onion"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708667256/Groomify/product_20_t2wgio.jpg",
			desc: "",
		},
		{
			id: 21,
			name: "Silk Pillow case",
			price: 259,
			size: null,
			quantity: 1,
			ingredients: ["Silk"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708668478/Groomify/product_21_pjpipe.jpg",
			desc: "",
		},
		{
			id: 22,
			name: "Hydrating foundation",
			price: 399,
			size: 100,
			quantity: 1,
			ingredients: ["Silk"],
			imageUri:
				"https://res.cloudinary.com/baibhavmalaviya/image/upload/v1708668483/Groomify/product_22_fghbyx.jpg",
			desc: "",
		},
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
