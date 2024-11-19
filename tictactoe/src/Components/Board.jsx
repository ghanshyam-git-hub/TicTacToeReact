import React , {useState} from "react";
import Square from "./Square";

const Board = ()=>{
    const [state,setState] = useState(Array(9).fill(null));
    const [xTurn,setXturn] = useState(true);

    const handleClick = (index)=>{
        const copyState = state;
        if(state[index]==null){ // fill only if it is empty
        copyState[index] = xTurn ? 'X' : 'O';

        setState(copyState);
        setXturn(!xTurn);  
        }
    };

    const checkWinner = (state)=>{

        if(state[0]!=null && state[0]===state[1] && state[1]===state[2]) return state[0];
        if(state[3]!=null && state[3]===state[4] && state[4]===state[5]) return state[3];
        if(state[6]!=null && state[6]===state[7] && state[7]===state[8]) return state[6];

        if(state[0]!=null && state[0]===state[3] && state[3]===state[6]) return state[0];
        if(state[1]!=null && state[1]===state[4] && state[4]===state[7]) return state[1];
        if(state[2]!=null && state[2]===state[5] && state[5]===state[8]) return state[2];

        if(state[0]!=null && state[0]===state[4] && state[4]===state[8]) return state[0];
        if(state[2]!=null && state[2]===state[4] && state[4]===state[6]) return state[2];
    };

    const winner = checkWinner(state); // here all the functions should be in sequence, if the checkwinner function call is placed before the checkwinner function there was some error

    const fillColor = (squareValue)=>{
        console.log("Square value = ",squareValue);
        if(squareValue==='X') return 'green';
        if(squareValue==='O') return 'red';
        if(squareValue===null) return 'white';
    };

    return (
        <div className="board-container">
            { // conditional rendering
                winner ? (<div className = "winner-text">{winner} won the game. Hurraih!!!</div> ): 
            (
            <>
                <div className="board-row">
                    <Square onClick={()=>handleClick(0)} value={state[0]} color={fillColor(state[0])}/>
                    <Square onClick={()=>handleClick(1)} value={state[1]} color={fillColor(state[1])}/>
                    <Square onClick={()=>handleClick(2)} value={state[2]} color={fillColor(state[2])}/>
                </div>

                <div className="board-row">
                <Square onClick={()=>handleClick(3)} value={state[3]} color={fillColor(state[3])}/>
                <Square onClick={()=>handleClick(4)} value={state[4]} color={fillColor(state[4])}/>
                <Square onClick={()=>handleClick(5)} value={state[5]} color={fillColor(state[5])}/>
                </div>

                <div className="board-row">
                <Square onClick={()=>handleClick(6)} value={state[6]} color={fillColor(state[6])}/>
                <Square onClick={()=>handleClick(7)} value={state[7]} color={fillColor(state[7])}/>
                <Square onClick={()=>handleClick(8)} value={state[8]} color={fillColor(state[8])}/>
                </div>
            </>
            )
            }
        
        </div>
       
    );
};

export default Board;