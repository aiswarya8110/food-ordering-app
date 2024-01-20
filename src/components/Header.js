import { LOGO_URL } from  '../utils/constants';
import swiggyDark from '../assets/swiggy-logo-dark.svg';
import swiggyLight from '../assets/swiggy-logo-light.svg';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';
import { BsInfoCircle, BsTelephone, BsCart3 } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from 'react';
import ThemeContext from '../utils/ThemeContext'

const Header = ()=>{
    const onlineStatus = useOnlineStatus();
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);
    const cartItems = useSelector((store)=> store.cart.cart);
    // store is a big object of slices state, key value pairs of slice name and it's state
    // console.log(store);

    return (
        <div className={`flex px-3 justify-between shadow-lg items-center 
        ${darkTheme ? 'bg-darkThemeBlack' : 'bg-lightThemeOrange'}`}>
            <div className="logo-container">
                <img className="w-56" src={darkTheme ? swiggyDark : swiggyLight}/>
            </div>
            <div className="nav-items">
                <ul className={`flex p-4 m-4 text-xl ${darkTheme ? 'text-darkThemeGray' : 'text-lightThemeWhite'}`}>
                    <li className="px-4">
                        online status 
                        <span className='text-sm'>{onlineStatus ? "🟢" : "🔴" }</span>
                    </li>
                    <li className="px-4">
                        <Link to="/">
                            <span className='flex items-center'>
                                <GoHome className="mr-2"/>
                                Home
                            </span>
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">
                            <span className='flex items-center'>
                                <BsInfoCircle className="mr-2"/>
                                About Us
                            </span>
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">
                        <span className='flex items-center'>
                            <BsTelephone className='mr-2'/>
                            Contact Us
                         </span>
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">
                        <span className='flex items-center'>
                                <BsCart3 className='mr-2'/>
                                Cart({cartItems.length})
                        </span>
                        </Link>
                    </li>
                    <li className='px-4 flex items-center text-xl'>
                        <span className='cursor-pointer' onClick={()=> setDarkTheme(!darkTheme)}>
                            {darkTheme ? <FaMoon className="text-darkThemeOrange"/> : <FaSun className="text-lightThemeWhite"/>}
                        </span>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;