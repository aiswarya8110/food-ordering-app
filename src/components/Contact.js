import { useContext } from 'react';
import userContext from '../utils/contexts';
import ThemeContext from '../utils/ThemeContext';
const Contact = ()=>{
    const data = useContext(userContext);
    const { darkTheme } = useContext(ThemeContext);
    console.log(data);
    return (
        <div className={`p-5 flex items-start justify-center ${darkTheme ? 'bg-darkThemeDeepBlack text-darkThemeGray' : 'bg-lightThemeWhite text-lightThemeOrange'}`}>
            <div className='w-2/5 mt-24'>
                <form action="">
                    <h3 className='font-bold text-3xl text-center mb-5'>Contact Us</h3>
                    <label htmlFor='name' className='mb-2 block font-medium'>Name</label>
                    <input type='text' name="name" id='name' className={`outline-none mb-4 w-full p-2 border-2 rounded-lg ${darkTheme ? 'border-darkThemeGray bg-darkThemeDeepBlack' : 'border-lightThemeOrange bg-lightThemeWhite'}`}/>

                    <label htmlFor='email' className='mb-2 block font-medium'>Email</label>
                    <input type='text' name="email" id='email' className={`outline-none mb-4 w-full p-2 border-2 rounded-lg ${darkTheme ? 'border-darkThemeGray bg-darkThemeDeepBlack' : 'border-lightThemeOrange bg-lightThemeWhite'}`}/>

                    <div className='text-center'>
                    <button className={`p-2 rounded-lg w-full font-semibold mt-4 ${darkTheme ? 'bg-darkThemeOrange text-lightThemeWhite' : 'bg-lightThemeOrange text-lightThemeWhite'}`}>Submit</button>
                     </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;