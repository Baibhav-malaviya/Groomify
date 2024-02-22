import { Check, Cross } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
function Alert({ isPaid, setIsPaid }) {
	const [timer, setTimer] = useState(5);

	// if (timer === 1)

	useEffect(() => {
		let intervalId;

		if (isPaid) {
			intervalId = setInterval(() => {
				setTimer((prevTimer) => {
					if (prevTimer === 1) {
						setIsPaid(false);
						clearInterval(intervalId);
						return 1; // Stop the timer at 1
					} else {
						return prevTimer - 1;
					}
				});
			}, 1000);
		} else {
			clearInterval(intervalId);
			setTimer(5);
		}

		return () => clearInterval(intervalId);
	}, [isPaid]);

	// useEffect(() => {
	// 	if (isPaid) {
	// 		const timer = setTimeout(() => {
	// 			// Run your function after 3 seconds
	// 			setIsPaid(false);
	// 		}, 5000);

	// 		return () => {
	// 			// Clean up the timer if the component unmounts or the dependency changes
	// 			clearTimeout(timer);
	// 		};
	// 	}
	// }, [isPaid, setIsPaid]);

	return (
		<div
			className={`flex items-center  justify-center ${
				!isPaid ? "hidden" : " "
			}`}
		>
			<div className="relative z-50 flex items-center justify-center mt-20 w-96 h-72 bg-slate-100">
				<p className="font-mono text-2xl font-extrabold text-stone-800">
					Payment Successful
				</p>
				<Check className="absolute w-32 h-32 p-4 left-[50%] -top-16 text-white border-slate-100 border-16 border-8 -translate-x-[50%] bg-green-500 rounded-full " />
				<Cross
					className="absolute rotate-45 cursor-pointer top-5 right-5"
					onClick={() => setIsPaid(false)}
				/>
				<span className="absolute p-2 px-4 font-semibold text-red-900 bg-white rounded-full shadow-md top-5 left-5">
					{timer}
				</span>
			</div>
		</div>
	);
}

Alert.propTypes = {
	isPaid: PropTypes.bool,
	setIsPaid: PropTypes.func,
};

export default Alert;
