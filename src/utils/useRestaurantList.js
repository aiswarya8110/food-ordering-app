import { useState, useEffect } from 'react';
import { RESLIST_API } from './constants';

const useRestaurantList = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    // fetch of restaurants

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
       const data = await fetch(RESLIST_API);
       const json =await data.json();
       const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       setListOfRestaurants(restaurants);
       setFilteredListOfRestaurants(restaurants);
    }

    return (
        {listOfRestaurants, 
        filteredListOfRestaurants, 
        setFilteredListOfRestaurants});
}

export default useRestaurantList;