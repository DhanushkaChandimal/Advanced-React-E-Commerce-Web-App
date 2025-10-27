import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Item } from '../types/types';

export interface CartItem extends Item {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Item>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

            let totalItems = 0;
            let totalPrice = 0;

            for (let i = 0; i < state.items.length; i++) {
                const item = state.items[i];
                totalItems = totalItems + item.quantity;
                totalPrice = totalPrice + (item.price * item.quantity);
            }
            state.totalItems = totalItems;
            state.totalPrice = totalPrice;
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;