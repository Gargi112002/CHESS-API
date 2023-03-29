import {useRef} from 'react';
import axios from 'axios';
import { useState } from 'react';
import './titleplayer.css';

const Titleplayer = () => {
    // const name =''
    // const location=''
    const [players,setPlayers]=useState([]);
    const inputRef = useRef(null);
    function handleClick() {
        const input1 = inputRef.current.value;
        console.log(input1);
        axios.get(`https://api.chess.com/pub/titled/${input1}`)
          .then((response) => {
            console.log(response.data)
            setPlayers(response.data.players)
          });
    }
    return (
        <div className='titileplayer'>
          <div className='tt'><u>Titled Players</u></div><br /><br />
          <button onClick={handleClick}><h5>Titled Players</h5></button>
          <input
            ref={inputRef}
            type="text"
            id="message"
            name="message"
          />
          <br />
          <br />
          <h7>Name&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{players.map((item)=> (
            <div>{item}</div>
          ))}</h7>
        </div>
        
      );
};

export default Titleplayer;