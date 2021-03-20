import { Component } from "react";
import './player.css'
class Player extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={name:this.props.name,score:0,current:0}
        

    // }
    // showcolor=(e)=>{
    //     this.setState({color:e})
    // }
    render(){
        return (<div className="playerinfo">
            <h1>{this.props.name}</h1>
            <div className="score">{this.props.score}</div>
            <div className="current"><span>current:&nbsp;</span>{this.props.current}</div>
            </div>)
        }
}

export default Player