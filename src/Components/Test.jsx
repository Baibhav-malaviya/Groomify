import Checkbox from "./Checkbox";
import { useState } from "react";

function Test() {
	const [list1, setList1] = useState([
		{ id: 1, label: "Item 1", checked: false },
		{ id: 2, label: "Item 2", checked: false },
		{ id: 3, label: "Item 3", checked: false },
	]);

	const onChangeList1 = (item) => {
		const newList = list1.map((el) => {
			return item.id === el.id ? { ...el, checked: !el.checked } : el;
		});
		setList1(newList);
	};

	const [listA, setListA] = useState([
		{ id: 4, label: "Item 4", checked: false },
		{ id: 5, label: "Item 5", checked: false },
		{ id: 6, label: "Item 6", checked: false },
	]);

	const onChangeListA = (item) => {
		const newList = listA.map((el) => {
			return item.id === el.id ? { ...el, checked: !el.checked } : el;
		});
		setListA(newList);
	};
	return (
		<div>
			<div className="flex flex-col my-10 space-y-2">
				{list1.map((item) => (
					<Checkbox
						key={item.id}
						checked={item.checked}
						onChange={() => onChangeList1(item)}
					>
						{item.label}
					</Checkbox>
				))}
			</div>
			<button className="px-4 py-2 rounded bg-stone-800">SWAP</button>
			<div className="flex flex-col my-10 space-y-2">
				{listA.map((item) => (
					<Checkbox
						key={item.id}
						checked={item.checked}
						onChange={() => onChangeListA(item)}
					>
						{item.label}
					</Checkbox>
				))}
			</div>
		</div>
	);
}

export default Test;
