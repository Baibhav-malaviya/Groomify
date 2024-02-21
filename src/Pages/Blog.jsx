import BlogCard from "../Components/BlogCard";
import Title from "../Components/Title";

function Blog() {
	const blogs = [
		{
			id: 1,
			title: "Top 10 Must-Have Grooming Products for Men",
			description:
				"Explore a curated list of essential grooming products every man should have in his arsenal, from skincare to haircare and grooming tools.",
		},
		{
			id: 2,
			title: "The Ultimate Guide to Skincare for Beginners",
			description:
				"Provide beginners with a comprehensive guide to establishing a basic skincare routine, including product recommendations and tips for different skin types.",
		},
		{
			id: 3,
			title: "DIY Haircare Recipes Using Natural Ingredients",
			description:
				"Share easy-to-make DIY haircare recipes using natural ingredients like coconut oil, avocado, and honey, promoting healthy and nourished hair.",
		},
		{
			id: 4,
			title: "The Science Behind Shaving: Tips for a Smooth Shave",
			description:
				"Delve into the science of shaving, discussing the best techniques, products, and aftercare routines for achieving a close and comfortable shave.",
		},
		{
			id: 5,
			title: "Unlocking the Secrets of Beard Grooming",
			description:
				"Offer insights into proper beard care, covering trimming, styling, and maintenance tips to help men achieve their desired beard styles.",
		},
		{
			id: 6,
			title: "Skincare Myths Debunked: Separating Fact from Fiction",
			description:
				"Address common skincare myths and misconceptions, providing evidence-based explanations to help readers make informed decisions about their skincare routines.",
		},
	];

	return (
		<div className="p-10 text-center">
			<Title title="Blog Page" />
			<div className="grid grid-cols-2 gap-8 m-16">
				{blogs.map((blog) => (
					<BlogCard key={blog.id} blog={blog} />
				))}
			</div>
		</div>
	);
}

export default Blog;
