import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Destructure the plant data from the action payload
      const existingItem = state.items.find(item => item.name === name); // Check if the item already exists in the cart

      if (existingItem) {
        existingItem.quantity++; // If the item exists, increment the quantity
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // If not, add the item with an initial quantity of 1
      }
    },

    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload); // Filter out the item based on its name
    },

    // Reducer to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Extract the name and new quantity from the payload
      const itemToUpdate = state.items.find(item => item.name === name); // Find the item in the cart by name

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update the quantity of the item
      }
    },
  },
});

// Export the action creators to be used in other components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in store.js
export default CartSlice.reducer;
