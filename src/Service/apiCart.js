const BASE_URL = "http://localhost:8000/api";

export async function addToCart(product) {
	try {
		const response = await fetch(`${BASE_URL}/cart/add/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(product),
		});
		const data = await response.json();
		console.log(data);
		return data?.data;
	} catch (error) {
		console.log("Error in addToCart: ", error.message);
	}
}

export async function deleteFromCart(id) {
	try {
		const response = await fetch(`${BASE_URL}/cart/remove/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		const data = await response.json();
		console.log(data);
		return data?.updatedCart;
	} catch (error) {
		console.log("Error in deleteFromCart: ", error.message);
	}
}

export async function getCart() {
	try {
		const response = await fetch(`${BASE_URL}/cart`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		const data = await response.json();
		console.log(data);
		return data?.data;
	} catch (error) {
		console.log("Error in getCart: ", error.message);
	}
}
export async function clearCart() {
	try {
		const response = await fetch(`${BASE_URL}/cart`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		const data = await response.json();
		console.log(data);
		return data?.data;
	} catch (error) {
		console.log("Error in getCart: ", error.message);
	}
}
