import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RestaurantMenuItemList from './RestaurantMenuItemList';
import { clearCart } from '../utils/cartSlice';
import ThemeContext from '../utils/ThemeContext';
import { BsCartFill } from "react-icons/bs";

const Cart = ()=>{
    const cart = useSelector((store)=> store.cart.cart); // The component is subscribed to store.cart.cart changes
    const { darkTheme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(clearCart());
    }

    return (
        <div className={`text-center p-5 ${darkTheme ? 'bg-darkThemeDeepBlack text-darkThemeGray' : 'bg-lightThemeWhite text-lightThemeGrey'}`}>
            <h2 className="text-3xl font-bold mb-5 mt-24">Cart</h2>
            {cart.length === 0 ? (<p className='font-medium text-xl'>Your <BsCartFill className={`text-xl inline ${darkTheme ? 'text-darkThemeOrange' : 'text-lightThemeOrange'}`}/> is empty </p>) : (
                <button className={`px-3 py-1 text-lg font-semibold rounded-lg ${darkTheme ? 'bg-darkThemeOrange text-lightThemeWhite' : 'bg-lightThemeOrange text-lightThemeWhite'}`} 
                onClick={handleClick}>Clear cart</button>
            )}
            <div className="w-6/12 m-auto">
                <RestaurantMenuItemList items={cart} />
            </div> 
        </div>
    )
};

export default Cart;