import { useEffect, useState } from 'react';
import { MENU_API } from './constants';

const useRestaurantMenu = (resId)=>{
    const [menu, setMenu] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
       const data = await fetch(`${MENU_API}${resId}`);
       const json = await data.json();
    //    console.log(json);
       setMenu(json);
    }

    return menu;
}

export default useRestaurantMenu;