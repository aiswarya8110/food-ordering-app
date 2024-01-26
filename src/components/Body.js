import RestaurantCard, { withOpenLabel } from './RestaurantCard';
import { useState, useContext } from 'react';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import useRestaurantList from '../utils/useRestaurantList';
import ThemeContext from '../utils/ThemeContext';

const Body = ()=>{
    const [searchText, setSearchText ] = useState("");
    const { darkTheme } = useContext(ThemeContext);
    const { listOfRestaurants, filteredListOfRestaurants, setFilteredListOfRestaurants } = useRestaurantList();
    const RestaurantCardWithOpenLabel = withOpenLabel(RestaurantCard);
    const onlineStatus = useOnlineStatus();


   if(onlineStatus === false){
    return (
        <div className={darkTheme ? 'bg-darkThemeDeepBlack text-darkThemeGray' : 'bg-lightThemeWhite text-lightThemeGrey'}>
            <h2>You are offline. Please check your internet connection.</h2>
        </div>
    )
   }

    return filteredListOfRestaurants === undefined || filteredListOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className={`p-5 ${darkTheme ? 'text-darkThemeGray bg-darkThemeDeepBlack' : 'text-lightThemeGrey bg-lightThemeWhite'}`}>
            <div className="flex pt-5 items-start justify-center">
                <div className="flex w-6/12">
                    
                    <div className="w-full relative">
                        <input type="search" className={`search-btn w-full border-2 border-solid  rounded-r-none outline-none p-2 rounded-md flex-auto ${darkTheme ? 'border-darkThemeOrange bg-darkThemeDeepBlack' : 'border-lightThemeOrange'}`} placeholder='search for restaurants...' value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
                    </div>

                    <button onClick={()=>{
                        const newRestaurants = listOfRestaurants.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchText));
                        setFilteredListOfRestaurants(newRestaurants);
                    }} className={`px-4 py-2 rounded-md rounded-l-none text-lightThemeWhite ${darkTheme ? 'bg-darkThemeOrange text-darkThemeDeepBlack' : 'bg-lightThemeOrange'}`}>Search</button>

                </div>
                <button className={`px-4 py-2 bg-gray-100 rounded-lg text-lightThemeWhite text-lg ml-5 ${darkTheme ? 'bg-darkThemeOrange text-darkThemeDeepBlack' : 'bg-lightThemeOrange'}`} 
                onClick={()=>{
                const filteredRestaurants = listOfRestaurants
                .filter((restaurant)=> restaurant?.info?.avgRating > 4);
                console.log(filteredRestaurants);
                setFilteredListOfRestaurants(filteredRestaurants);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="flex pt-5 flex-wrap justify-center">
                {/* If the restaurant is veg restaurant then add a veg label to it */}
                {filteredListOfRestaurants.map((restaurant)=>
                    restaurant?.info?.isOpen ? (
                    <RestaurantCardWithOpenLabel key={restaurant.info.id} resData={restaurant} />
                    ) :
                    (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    )
                )}
            </div>
        </div>
    )
}
export default Body;