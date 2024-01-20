import RestaurantMenuItemList from './RestaurantMenuItemList';
import { FaAngleDown } from "react-icons/fa6";

const RestaurantMenuCategory = ({ data, showItems, setShowIndex, index, setShowIndexOpen })=>{
    const { title, itemCards } = data;

    return (
        <div className="w-6/12 my-5 bg-gray-50 p-5 m-auto shadow-lg">
            <div className="w-full flex justify-between cursor-pointer" onClick={()=> {
                setShowIndex(index);
                setShowIndexOpen(!showItems);
                }}>
                <span className="font-bold">{title}{" "}({itemCards.length})</span>
                <span><FaAngleDown /></span>
            </div>
            {showItems && <RestaurantMenuItemList items={itemCards} />}
        </div>
    )
}

export default RestaurantMenuCategory;