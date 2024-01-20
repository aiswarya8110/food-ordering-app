import { useState, useContext } from 'react';
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantMenuCategory from './RestaurantMenuCategory';
import ThemeContext from '../utils/ThemeContext';

const RestaurantMenu = ()=>{
    const [showIndex, setShowIndex] = useState(0);
    const [showIndexOpen , setShowIndexOpen ] = useState(true);
    const { restaurantId } = useParams();
    const resInfo = useRestaurantMenu(restaurantId);
    const { darkTheme } = useContext(ThemeContext);

    if(resInfo === null){
        return <Shimmer />
    }

    const categories = resInfo?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=> item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards?.[0]?.card?.card?.info;
    return (
        <div className={`text-center p-5 ${darkTheme ? 'bg-darkThemeDeepBlack text-darkThemeGray' : 'bg-lightThemeWhite text-lightThemeGrey'}`}>
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h3 className="font-bold text-md">
                {cuisines?.join(" ")}{" "}{costForTwoMessage}
            </h3>
            {categories.map((item, index)=> (
                <RestaurantMenuCategory data={item?.card?.card}
                setShowIndex={setShowIndex}
                showItems={index === showIndex ? showIndexOpen : false}
                index={index}
                setShowIndexOpen={setShowIndexOpen}
                />
            ))}
        </div>
    )
}


export default RestaurantMenu;