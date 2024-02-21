import { Minus, Plus } from "lucide-react";
import { useState } from "react";
function FaqCard({ question, isOpen, onOpen, children }) {
	// const question =;
	const open = question.id === isOpen;
	return (
		<div
			onClick={() =>
				question.id !== isOpen ? onOpen(question.id) : onOpen(null)
			}
			className={` h-auto hover:cursor-pointer w-[450px] text-black `}
		>
			<div className="flex items-center justify-start w-full p-4 space-x-4 text-lg font-semibold text-teal-800 bg-teal-100 ">
				{open ? <Plus className="rotate-45" /> : <Plus />}
				<p className="">{question.title}</p>
				{/* {open ? <p>{question.disc}</p> : <p></p>} */}
			</div>
			{/* {open ? <p>Hello </p> : <></>} */}
			{open && (
				<div className="w-full p-4 space-y-4 ">
					<div className="flex items-center justify-start text-sm ">
						<p className="">{question.disc}</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default FaqCard;
