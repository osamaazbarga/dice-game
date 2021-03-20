import { Component } from "react"; 
import Btn from './Button/Button'
import Dicepic from "./Die/Dicepic";
// import './style.css'
class Actions extends Component{
        
    handleChange=(e)=> {
        this.props.towin(Number(e.target.value))
    }
    render(){
        let mystyle={
            visibility: this.props.state.winvisable
        }
        let winningplayer=this.props.state.winningplayer
        // console.log("myclick"+this.props.state.buttonclickid)
        let now=this.props.state.buttonclickid
        return (<div className="action">
            <Btn icon="plus-outline" clickbtn="NEW GAME" onClick={this.props.newgame}/>
            <Dicepic dice={this.props.state.dice1}/>
            <Dicepic dice={this.props.state.dice2}/>
            
            <Btn icon="loop" clickbtn="ROLL DICE" onClick={this.props.roll}/>
            <Btn icon="download-outline" clickbtn="HOLD" onClick={this.props.hold} clicky={now}/>
            <input type="number" onChange={this.handleChange}></input>
            <h1 className="win" style={mystyle}>the win is {winningplayer}</h1>
            
        </div>)
        }
}

export default Actions