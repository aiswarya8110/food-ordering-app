import { RES_DISH_IMAGE } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
const RestaurantMenuItemList = ({ items })=>{
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item)=>{
                const { name, price, imageId, isVeg, description, id }  = item?.card?.info;
                return (
                <div key={id} className="flex justify-between items-center border-b-2 my-5 p-5">
                    <div className="flex flex-col text-left pr-5">
                        <span className="text-sm">
                            {isVeg ? "🟩" : "🟥"}
                        </span>
                        <span className="font-bold">{name}</span>
                        <span>₹{price/100}</span>
                        <p className="text-sm pt-5">{description}</p>
                    </div>
                    <div className="relative min-w-[118px] h-[120px]">
                        <img src={`${RES_DISH_IMAGE}${imageId}`} 
                        alt={name} 
                        className="w-[118px] h-[96px] object-cover rounded-lg"/>
                        <button className="bg-lightThemeWhite shadow-lg text-green-500 px-4 py-2 absolute left-1/2 -translate-x-1/2 bottom-0 font-semibold rounded-lg w-3/4 text-addBtn"
                        onClick={()=>handleAddItem(item)}
                        >Add +</button>
                    </div>
                </div>
            )})}
        </div>
    )
}

export default RestaurantMenuItemList;