import RestaurantCard, { withOpenLabel } from './RestaurantCard';
import { useState, useContext, useEffect } from 'react';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import useRestaurantList from '../utils/useRestaurantList';
import ThemeContext from '../utils/ThemeContext';
import { SWIGGY_SUGGESTIONS_API, RES_IMAGE } from '../utils/constants';

const Body = ()=>{
    const [searchText, setSearchText ] = useState("");
    const { darkTheme } = useContext(ThemeContext);
    const [suggestions, setSuggestions] = useState();
    const [showSuggestions, setShowSuggestions ] = useState(false);
    // console.log(searchText);
    // whenever state variables update, react triggers a reconcilation cycle(re-renders the component)
    const { listOfRestaurants, filteredListOfRestaurants, setFilteredListOfRestaurants } = useRestaurantList();

    const RestaurantCardWithOpenLabel = withOpenLabel(RestaurantCard);

    const onlineStatus = useOnlineStatus();

    const fetchSuggestions = async()=>{
        console.log(searchText);
        try{
            const response = await fetch(SWIGGY_SUGGESTIONS_API+searchText);
            const json = await response.json();
            console.log(json);
            setSuggestions(json?.data?.suggestions);
            setShowSuggestions(true);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            fetchSuggestions();
        }, 500);

        return ()=>clearTimeout(timer);

    },[searchText])


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
                        <input type="search" className={`search-btn w-full border-2 border-solid  rounded-r-none outline-none p-2 rounded-md flex-auto ${darkTheme ? 'border-darkThemeOrange bg-darkThemeDeepBlack' : 'border-lightThemeOrange'}`} placeholder='search for restaurants...' value={searchText} onChange={(e)=> setSearchText(e.target.value)}
                        onBlur={()=> setShowSuggestions(false)}
                        onFocus={()=> setShowSuggestions(true)}
                        />

                        {showSuggestions && (
                           <div className={`block absolute top-full left-0 w-full z-[1] shadow-lg ${darkTheme ? 'bg-darkThemeDeepBlack text-darkThemeGray' : 'bg-lightThemeWhite text-lightThemeGrey'}`}>
                            <ul>
                                {suggestions?.map((item)=>( 
                                <li key={item.text} className={`flex items-center cursor-pointer p-3 font-medium transition-colors ${darkTheme ? 'hover:bg-lightThemeGrey' : 'hover:bg-darkThemeGray'}`}>
                                    <img className="w-[100px] h-[70px] object-cover inline rounded-lg mr-4" alt="search-item" src={RES_IMAGE+item.cloudinaryId}/>
                                    <div className="flex flex-col">
                                        <h4 className="font-semibold">{item.text}</h4>
                                        <h5 className="font-light">{item.tagToDisplay}</h5>
                                    </div>
                                </li>))}
                            </ul>
                           </div>   
                        )}
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



{/* <div className="block fixed bg-lightThemeWhite w-[25em]">
                            <ul>
                                <li className='px-3 py-2 font-semibold'>pizza</li>
                                <li className='px-3 py-2 font-semibold'>pizza</li>
                                <li className='px-3 py-2 font-semibold'>pizza</li>
                                <li className='px-3 py-2 font-semibold'>pizza</li>
                            </ul>
                        </div>
                        ) */}






/**
 * 
 * useEffect(()=>{
        // console.log("Effect function called after the DOM is updated");
        fetchData();
    },[])

    const fetchData = async ()=>{
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3007589&lng=85.82942589999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const resData = await data.json();
    //    console.log(resData);
       const restaurantList = resData?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //    console.log(restaurantList);
       setListOfRestaurants(restaurantList);
       setFilteredListOfRestaurants(restaurantList);
    }
 * 
 * 
 * 
 * 
 * 
 * 
 */