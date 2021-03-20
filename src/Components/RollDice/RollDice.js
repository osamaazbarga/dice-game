import { Component } from "react";
import Player from './Player/Player'
import Action from './GameActions'

class RollDice extends Component{
    constructor(props){
        super(props)
        this.state={
            pointsToWin:100,
            dice1:0,
            dice2:0,
            playerTurn:0,
            buttonclickid:0,
            players: [
                {
                    playername:'player1',
                    current: 0,
                    score: 0
                },
                {
                    playername:'player2',
                    current: 0,
                    score: 0
                }
            ],
            winningplayer:'',
            winvisable:'hidden'
        }

    }


    
    newgame=()=>{
        this.setState({pointsToWin:100,dice1:0,dice2:0,playerTurn:0,buttonclickid:true,winningplayer:'',winvisable:'hidden'})
        this.state.players.map(obj=>{
            obj.score=0;
            obj.current=0;
        })
        
    }
    
    roll=()=>{
        let d1=Math.floor(Math.random() * 6) + 1;
        let d2=Math.floor(Math.random() * 6) + 1;
        this.setState({dice1:d1,dice2:d2})
        if(d1===6&&d2===6){
            this.state.players[this.state.playerTurn].current=0;
            if(this.state.playerTurn===0){
                this.setState({playerTurn:1})
            }
            else{
                this.setState({playerTurn:0})
            }
            return;
        }
        // console.log(this.state.dice1);
        let playerarray=this.state.players;
        playerarray[this.state.playerTurn].current=playerarray[this.state.playerTurn].current+d1+d2;
        // console.log(playerarray)
        this.setState({players:playerarray})  

    }

    hold=()=>{
        this.state.players[this.state.playerTurn].score=this.state.players[this.state.playerTurn].score+this.state.players[this.state.playerTurn].current;
        this.state.players[this.state.playerTurn].current=0;
        if(this.state.players[this.state.playerTurn].score>=this.state.pointsToWin){
            let playerwinnigname=this.state.players[this.state.playerTurn].playername
            this.setState({winningplayer:playerwinnigname,winvisable:'visible',buttonclickid:1})
            return;
        }
        if(this.state.playerTurn===0){
            this.setState({playerTurn:1})
        }
        else{
            this.setState({playerTurn:0})
        }


        
    }

    changepoint=(number)=>{
        this.setState({pointsToWin:number})
    }

    render(){

        return (
        <div>
            <div className="game">
                <Player name={this.state.players[0].playername} score={this.state.players[0].score} current={this.state.players[0].current}/>
                <Action state={this.state} roll={this.roll} hold={this.hold} newgame={this.newgame} towin={this.changepoint}/>
                <Player name={this.state.players[1].playername} score={this.state.players[1].score} current={this.state.players[1].current}/>
            </div>
            <div>
            </div>
        </div>
        
        
        )
        

    }

    

}

export default RollDice;