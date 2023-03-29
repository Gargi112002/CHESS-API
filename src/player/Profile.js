import {useRef} from 'react';
import axios from 'axios';
import { useState } from 'react';
import './profile.css';

const Profile = () => {
  // const name =''
  // const location=''
  const [name,setName]=useState("");
  const [location,setLocation]=useState("");
  const [player_id,setPlayer_id]=useState("");
  const [username,setUsername]=useState("");
  const [status,setStatus]=useState("");
  const inputRef = useRef(null);

  function handleClick() {
    const input1 = inputRef.current.value;
    console.log(input1);
    axios.get(`https://api.chess.com/pub/player/${input1}`)
      .then((response) => {
        console.log(response.data)
        setName(response.data.name)
        setLocation(response.data.location)
        setPlayer_id(response.data.player_id)
        setUsername(response.data.username)
        setStatus(response.data.status)
      });
  }
  

  return (
    <div className='playerprofile'>
      <div className='pp'><u>Player's Profile</u></div><br /><br />
      <button onClick={handleClick}><h5>Player's Name</h5></button>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />
      <br />
      <br />
      <h7>Name&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{name}</h7>
      <br />
      <h7>Location&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{location}</h7>
      <br />
      <h7>Player's Id&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{player_id}</h7>
      <br />
      <h7>Username&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{username}</h7>
      <br />
      <h7>Status&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{status}</h7>
    </div>
    
  );
};

export default Profile;
