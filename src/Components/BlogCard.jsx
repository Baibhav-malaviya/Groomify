import PropTypes from "prop-types";
function BlogCard({ blog }) {
	return (
		<div className="overflow-hidden relative shadow-md blog-card    w-[500px] aspect-[1.8] cursor-pointer group">
			<img
				src={blog.imageUri}
				className="w-full transition-all duration-700 aspect-video group-hover:scale-110"
				alt=""
			/>
			{/* <p className="absolute bottom-0 left-0 p-4 text-xl font-semibold text-white bg-teal-600 group-hover:hidden right-20">
				{item.title}
			</p> */}
			<div className="absolute inset-0 flex flex-col justify-between p-6 transition-all duration-200 delay-100 bg-teal-600/85 group-hover:translate-x-0">
				<p className="text-xl font-semibold text-justify text-white">
					{blog.title}
				</p>
				<p className="py-2 text-base text-justify text-gray-200">
					{blog.description}
				</p>
				<button className="self-start px-4 py-2 text-sm font-semibold tracking-widest text-white uppercase bg-teal-900 rounded-md hover:underline">
					continue reading...
				</button>
			</div>
		</div>
	);
}

BlogCard.propTypes = {
	blog: PropTypes.object,
};

export default BlogCard;
