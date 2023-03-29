import axios from 'axios';
import { useState } from 'react';
import _ from "lodash"
import './leaderboard.css';

 
const pageSize =10;
const Leaderboard = () => 
{
  // const name =''
  // const location=''
   
    

    const [allList,setAllList] = useState([])

   
    const [paginatedLists,setpaginatedLists] = useState();
    const [currentPage, setcurrentPage] = useState(1)
    const[filterState,setFilterState]=useState();

    
    function onFilterValueChange(event){
      console.log(event.target.value)
      setFilterState(event.target.value);
      
    
    
    axios.get(`https://api.chess.com/pub/leaderboards`)
      .then(response => {
        //console.log(response.data);
        if(event.target.value === "battle")
        {
          setAllList(response.data.battle);
          console.log(response.data.battle);
        }
        if(event.target.value === "daily")
        {
          setAllList(response.data.daily);
          console.log(response.data.daily);
        }
        if(event.target.value === "daily960")
        {
          setAllList(response.data.daily960);
          console.log(response.data.daily960);
        }
        if(event.target.value === "live_blitz")
        {
          setAllList(response.data.live_blitz);
          console.log(response.data.live_blitz);
        }
        if(event.target.value === "live_bullet")
        {
          setAllList(response.data.live_bullet);
          console.log(response.data.live_bullet);
        }
        if(event.target.value === "live_rapid")
        {
          setAllList(response.data.live_rapid);
          console.log(response.data.live_rapid);
        }
        if(event.target.value === "rush")
        {
          setAllList(response.data.rush);
          console.log(response.data.rush);
        }
        if(event.target.value === "tactics")
        {
          setAllList(response.data.tactics);
          console.log(response.data.tactics);
        }
        setpaginatedLists(_(filterState).slice(0).take(pageSize).value());
      
      }).catch((error)=>{
        console.log(error);
      })
    };
    const pageCount ={filterState} ?Math.ceil({filterState}.length/pageSize) :0;
    if (pageCount ===1) return null;
    const pages = _.range(1, pageCount+1)
    
    const pagination=(pageNo)=>{
      setcurrentPage(pageNo);
      const startIndex =(pageNo -1) * pageSize;
      const paginatedList = _(filterState).slice(startIndex).take(pageSize).value();
      setpaginatedLists(paginatedList)

    }
  
    
  return (
   <div>
    
      <h3>Leaderboards</h3>
      {!paginatedLists ? (
        "No Data Found"
      ):(
        <table className="table">
          <thead>
          <tr>    
             
              <th>Rank</th>
              <th>User Name</th>
              <th>Score</th>
              <th>Name</th>
              <th>Country</th>
              <th>Status</th>
              <th>Avatar</th>
              <th>Title</th>
              <th>URL</th>
              <th>Win Count</th>
            </tr>
          </thead>
          <tbody>
            { allList.map((item)=>(
          <tr>
           
           <td>
             {item.rank}
           </td>
           <td>
             {item.username}
           </td>
           <td>
             {item.score}
           </td>
            <td>
             {item.name}
           </td>
           <td>
             {item.country}
           </td>
           <td>
             {item.status}
           </td>
           <td>
             {item.avatar}
           </td>
           <td>
             {item.title}
           </td>
           <td>
             {item.url}
           </td>
            <td>
             {item.win_count}
           </td>
      </tr>
    
        ))}
            
          </tbody>
        </table>
)}
      <nav className = "border d-flex align-items-center justify-content-center">
        <ul className="pagination">
          {
            pages.map((page)=>(
              <li 
              className ={page === currentPage ? "page-item active" : "page-item"
            }>
              <p className="page-link"
               onClick={()=>pagination(page)}
              >{page}</p>
            </li>
            ))
          }

        </ul>
      </nav>
      <div className='dropdown'>
        <div className='select'>Choose Filter
      <select id="option"
      className='btn'
        value={filterState} onChange={onFilterValueChange}
        >
        
        <option value="battle">Battle</option>
        <option value="daily">Daily</option>
        <option value="daily960">Daily960</option>
        <option value="live_blitz">Live Blitz</option>
        <option value="live_bullet">Live Bullet</option>
        <option value="live_rapid">Live Rapid</option>
        <option value="rush">Rush</option>
        <option value="tactics">Tactics</option>
      </select>
    </div>
    </div>
    </div>

  );

}

export default Leaderboard
