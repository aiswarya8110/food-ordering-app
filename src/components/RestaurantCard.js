import { RES_IMAGE } from '../utils/constants';
import { Link } from 'react-router-dom';
import { MdStars } from "react-icons/md";

const RestaurantCard = (props)=>{

    const { resData } = props;
    const {name, cuisines, avgRating, cloudinaryImageId, id } = resData.info;
    return (
        <Link to={`/restaurants/${id}`} className="res-link">
            <div className="m-4 p-4 text-grey w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
                <img alt={name}
                src={`${RES_IMAGE}${cloudinaryImageId}`}
                className="rounded-lg" />
                <h3 className="font-bold py-2 text-xl">{name}</h3>
                <h4><MdStars className="inline-block mr-2 text-green text-xl"/>{avgRating} stars</h4>
                <h4 className='font-semibold'>{cuisines.join(", ")}</h4>
            </div>
        </Link>
    )
}

// input - RestaurantCard , output - RestaurantCard with Veg label

export const withOpenLabel = (RestaurantCard)=>{
    return ({ resData })=>{
        return (
            <div className="relative">
                <label className="absolute bottom-0 left-0 bg-lightThemeOrange px-2 py-1 rounded-md ml-4 text-white">Open</label>
                <RestaurantCard resData={resData}/>
            </div>
        )
    }
}


export default RestaurantCard;