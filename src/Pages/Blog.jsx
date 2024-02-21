import BlogCard from "../Components/BlogCard";
import Title from "../Components/Title";

function Blog() {
	const blogs = [
		{
			id: 1,
			title: "Top 10 Must-Have Grooming Products for Men",
			imageUri: "/blog_1.jpg",
			description:
				"Explore a curated list of essential grooming products every man should have in his arsenal, from skincare to haircare and grooming tools.",
		},
		{
			id: 2,
			title: "The Ultimate Guide to Skincare for Beginners",
			imageUri: "/blog_2.jpg",
			description:
				"Provide beginners with a comprehensive guide to establishing a basic skincare routine, including product recommendations and tips for different skin types.",
		},
		{
			id: 3,
			title: "DIY Haircare Recipes Using Natural Ingredients",
			imageUri: "/blog_3.jpg",
			description:
				"Share easy-to-make DIY haircare recipes using natural ingredients like coconut oil, avocado, and honey, promoting healthy and nourished hair.",
		},
		{
			id: 4,
			title: "The Science Behind Shaving: Tips for a Smooth Shave",
			imageUri: "/blog_4.jpg",
			description:
				"Delve into the science of shaving, discussing the best techniques, products, and aftercare routines for achieving a close and comfortable shave.",
		},
		{
			id: 5,
			title: "Unlocking the Secrets of Beard Grooming",
			imageUri: "/blog_5.jpg",
			description:
				"Offer insights into proper beard care, covering trimming, styling, and maintenance tips to help men achieve their desired beard styles.",
		},
		{
			id: 6,
			title: "Skincare Myths Debunked: Separating Fact from Fiction",
			imageUri: "/blog_6.jpg",
			description:
				"Address common skincare myths and misconceptions, providing evidence-based explanations to help readers make informed decisions about their skincare routines.",
		},
	];

	return (
		<div className="p-10 px-24 mb-20 space-y-20 text-center">
			<Title title="Blog Page" />
			<div className="flex flex-wrap items-center justify-between gap-10 ">
				{blogs.map((blog) => (
					<BlogCard key={blog.id} blog={blog} />
				))}
			</div>
		</div>
	);
}

export default Blog;
