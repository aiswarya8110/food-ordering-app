import { useContext } from 'react';
import ThemeContext from '../utils/ThemeContext';
import loadingDark from '../assets/loading-dark.svg';
import loadingLight from '../assets/loading-light.svg';

const Shimmer = ()=>{
    const { darkTheme } = useContext(ThemeContext);
    return (
        <div className={`p-5 flex items-start justify-center ${darkTheme ? 'bg-darkThemeDeepBlack' : 'bg-lightThemeWhite'}`}>
            <img src={darkTheme ? loadingDark : loadingLight} alt="loading" className='w-[150px] mt-24' />
        </div>
    )
}

export default Shimmer;