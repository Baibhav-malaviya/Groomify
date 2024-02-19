function SearchBar({ isOpen }) {
	return (
		<div
			className={`h-20 flex bg-teal-600 p-4 space-x-2 transition-all duration-500 ${
				!isOpen ? "hidden" : ""
			}`}
		>
			<input
				className="h-full w-[90%] rounded-l-lg px-5"
				placeholder="Search for products..."
				type="text"
				name=""
				id=""
			/>
			<button className="h-full flex-grow bg-stone-800 rounded-r-lg text-2xl text-white font-semibold">
				Search
			</button>
		</div>
	);
}

export default SearchBar;
