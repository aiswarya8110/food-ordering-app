import { useState, useEffect } from 'react';

const User = (props)=>{
    const [ count, setCount ] = useState(0);
    const [ count2 ] = useState(1);
    const { name, location } = props;

    useEffect(()=>{
      console.log("effect function called");
      setInterval(()=>{
        console.log("Namaste React OP");
      }, 1000)  
    },[])

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <button onClick={()=>{
                setCount(count + 1);
            }}>increment count</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @aiswarya</h4>
        </div>
    )
}

export default User;