import { useState } from "react";
import FaqCard from "../Components/FaqCard";

function Faq() {
	const questions = [
		{
			id: 0,
			title: "Lorem ipsum dolor sit amet consec.",
			disc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, magni? Lorem ipsum dolor sit amet.",
		},
		{
			id: 1,
			title: "Lorem ipsum dolor sit amet consec.",
			disc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, magni? Lorem ipsum dolor sit amet.",
		},
		{
			id: 2,
			title: "Lorem ipsum dolor sit amet consec.",
			disc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, magni? Lorem ipsum dolor sit amet.",
		},
		{
			id: 3,
			title: "Lorem ipsum dolor sit amet consec.",
			disc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, magni? Lorem ipsum dolor sit amet.",
		},
		{
			id: 4,
			title: "Lorem ipsum dolor sit amet consec.",
			disc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, magni? Lorem ipsum dolor sit amet.",
		},
		{
			id: 5,
			title: "Lorem ipsum dolor sit amet consec.",
			disc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, magni? Lorem ipsum dolor sit amet.",
		},
	];

	const [isOpen, setIsOpen] = useState(null);
	return (
		<div className="grid grid-cols-2 grid-rows-3 gap-4 p-8 px-20">
			{questions.map((question) => (
				<FaqCard
					key={question.id}
					question={question}
					isOpen={isOpen}
					onOpen={setIsOpen}
				>
					{question.disc}
				</FaqCard>
			))}
		</div>
	);
}

export default Faq;
