import { Component } from 'react';
class UserClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://picsum.photos/200/300"
            }
        }
        // console.log(`${this.props.name}child constructor`);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    async componentDidMount(){
       const data = await fetch("https://api.github.com/users/akshaymarch7");
       const json = await data.json();
       this.setState({
        userInfo: json
       })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.userInfo !== this.state.userInfo){
            console.log("component did updated");
        }
    }
    
    render(){
        console.log(this.state.userInfo);
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} alt="user-image" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @aiswarya</h4>
            </div>
        )
    }
}

export default UserClass;