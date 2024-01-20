import React, { useContext } from 'react';
import ThemeContext from '../utils/ThemeContext';

const AboutUs = ()=>{
    const { darkTheme }=useContext(ThemeContext);
    return (
        <div className={`p-5 flex justify-center items-start ${darkTheme ? 'bg-darkThemeDeepBlack text-darkThemeGray' : 'bg-lightThemeWhite text-lightThemeGrey'}`}>
            <div className='w-1/2 mt-24'>
                <h2 className='font-bold text-3xl text-center mb-5'>About Us</h2>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui exercitationem quia suscipit quo! Repellat animi eum quibusdam fugit id molestias pariatur praesentium nostrum, blanditiis tempore quis quo earum nam autem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam consequatur eius unde placeat sapiente quod libero voluptas, laudantium voluptatibus natus a, reiciendis eaque atque laborum, quis nostrum! Libero, accusamus vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quae? Vel blanditiis possimus repellendus, in laboriosam vitae temporibus dicta ducimus fugit sapiente tenetur eveniet alias eligendi cum adipisci, tempore, quaerat rem expedita molestias ad? Omnis autem doloribus necessitatibus minima consectetur dolorum eaque, aut doloremque modi laborum iusto. Hic velit accusamus, laborum sed maxime quidem eos, nulla libero repellat dicta ab?</p>
            </div>
        </div>
    )
}

export default AboutUs;