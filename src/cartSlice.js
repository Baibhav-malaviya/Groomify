import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add(state, action) {
			//! action.payload = newItem
			state.cart.push(action.payload);
		},
		remove(state, action) {
			//!action.payload = id
			state.cart = state.cart.filter((item) => item.id !== action.payload);
		},
		increaseItemQuantity(state, action) {
			//!action.payload = id
			state.cart.some((item) => {
				if (item.id === action.payload) {
					item.quantity += 1;
				}
			});
		},
		decreaseItemQuantity(state, action) {
			//!action.payload = id
			state.cart.some((item) => {
				if (item.id === action.payload) {
					item.quantity -= 1;
				}

				if (item.quantity === 0) cartSlice.caseReducers.remove(state, action);
			});
		},
		clearCart(state) {
			state.cart = [];
		},
	},
});

export const {
	add,
	remove,
	increaseItemQuantity,
	decreaseItemQuantity,
	clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
