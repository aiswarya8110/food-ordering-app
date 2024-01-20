import { useRouteError } from 'react-router-dom';
import errorImg from '../assets/404.jpg'

const Error = ()=>{
    const error = useRouteError();

    if(error.status === 404){
        return (
        <div className='h-screen flex justify-center items-center'>
                <img src={errorImg} alt="404-img" className="w-1/2"/>
        </div>
        )
    }
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went wrong!!</h2>
        </div>
    )
}

export default Error;