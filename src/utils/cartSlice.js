import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addItem: (state, action)=>{ // redux passes the copy of the state which you can directly modify and return it or you create a new copy of the state(draft) and return it.
            state.cart.push(action.payload);
            return state;
        },
        removeItem: (state)=>{
            state.cart.pop();
            return state; // No need to return 
        },
        clearCart: (state)=>{
            // state = {...current(state), cart: []} This does not modifies the state it changes the reference
            state.cart = []; // This modifies the state
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;