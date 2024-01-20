import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';
import userContext from '../utils/contexts';

class About extends Component{
    constructor(props){
        super(props);
        // console.log("About constructor called");
    }

    componentDidMount(){
    }

    render(){
        // console.log("About render is called");
        return (
            <div>
                <h1>About Us Class Component</h1>
                <h2>This is About Page</h2>
                <userContext.Consumer>{({ userName })=>{
                    return <h2>LoggedIn User: {userName}</h2>
                }}</userContext.Consumer>
                <UserClass name="first" location="India" />
                {/* <User name="Aiswarya" location="India" /> */}
                <p>Last Element</p>
            </div>
        )
    }
}

/*

    Parent Constructor
    Parent render

    First child constructor
    First child render

*/

export default About;