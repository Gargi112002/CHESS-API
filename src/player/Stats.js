import {useRef,useEffect} from 'react';
import axios from 'axios';
import { useState } from 'react';
import './stats.css';
import Table from 'react-bootstrap/Table';

const Stats = () => {
    // const [best,setBest]=useState("");
    // const[selects,setSelects]=useState("");
    // const[record,setRecord]=useState("");
    const[chess_daily,setChess_daily]=useState({});
    const[chess960_daily,setChess960_daily]=useState({});
    const[chess_blitz,setChess_blitz]=useState({});
    const[chess_rapid,setChess_rapid]=useState({});
    const[chess_bullet,setChess_bullet]=useState({});
    const [userName,setUserName]=useState({});
    const [selects, setSelects] = useState('Select your choice')

    const [selected,setSelected] = useState(null)

function handleChange(e) {


    setSelects(e.target.value);
    console.log(selects);
    // const input1 = e.target.value;
    
if(e.target.value === "chess_daily"){
  setSelected(chess_daily)
}
if(e.target.value === "chess960_daily"){
  setSelected(chess960_daily)
}
if(e.target.value === "chess_blitz"){
  setSelected(chess_blitz)
}
if(e.target.value === "chess_bullet"){
  setSelected(chess_bullet)
}
if(e.target.value === "chess_rapid"){
  setSelected(chess_rapid)
}
      
}

const handleSubmit = ()=>{
  axios.get(`https://api.chess.com/pub/player/${userName}/stats`)
      .then((response) => {
        // setSelect(e.target.Stats);
        console.log(response.data);
       
          setChess_daily(response.data.chess_daily);
          // console.log(response.data.chess_daily);

      
          setChess960_daily(response.data.chess960_rapid);
          // console.log(response.data.chess_rapid);

          setChess_blitz(response.data.chess_blitz);
          // console.log(response.data.chess_bullet);

       
          setChess_rapid(response.data.chess_rapid);
          // console.log(response.data.chess_blitz);
          setChess_bullet(response.data.chess_bullet); 
          

      }).catch((err)=>{
        console.log(err)
      })
}

return (
    <div className='playerstats'>
      <div className='ss'><u>Statistics</u></div><br /><br />
      <button onClick={handleSubmit}><h5>Name</h5></button>
       <input
        // ref={inputRef}
        onChange={(e)=>setUserName(e.target.value)}
        type="text"
        id="message"
        name="message"
      />
      <br />
      <br />
      <div>
        <select value={selects} onChange={e => handleChange(e)}>
        <option >Select</option>
          <option value="chess_daily">chess_daily</option>
          <option value="chess_rapid">chess_rapid</option>
          <option value="chess_bullet">chess_bullet</option>
          <option value="chess_blitz">chess_blitz</option>
        </select>
      </div>
      <br />
      <br />
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Game</th>
          <th>Rating</th>
          
        </tr>
      </thead>
      
          
          
      <tbody>
        <tr>
         
          <td>{selected === null ? "" :selected.best.date}</td>
          <td>{selected === null ? "" :selected.best.game} </td>
          <td>{selected === null ? "" :selected.best.rating}</td>
        </tr>
        
        
      </tbody>
   
    </Table>
      <br />
      <br />

      
    </div>
);
}
export default Stats;

