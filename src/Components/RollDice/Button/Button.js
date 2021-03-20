import { Component } from "react";
import './Button.css'

class ButtonMid extends Component{
    constructor(props){
        super(props);
        this.state={text:this.props.clickbtn,
            icon:"ion-ios-"+this.props.icon,
            clicky:this.props.clicky
            // name:this.props.name
            // ,score:this.props.score
            // ,current:this.props.current
            // ,dice1:this.props.dice1
            // ,dice2:this.props.dice2
            // ,info:this.props.info
        }

    }
    onClick=(e)=>{
        // console.log(this.state);
        // console.log(this.state.info.current);
        this.props.onClick()
    }

    // showcolor=(e)=>{
    //     this.setState({color:e})
    // }
    render(){
        // console.log('clicky'+this.props.clicky)
            return (<div>
                <button onClick={this.onClick} disabled = {this.state.clicky === 1 ? true : false}><i className="iconify" data-icon={this.state.icon}></i>{this.state.text}</button>
                </div>)
    }
}

export default ButtonMid