import {Link} from "react-router-dom"
import './HomePage.css';
// import {Submit} from './input.jsx';
// import {View, Text} from 'react-native';
// import { Button} from 'react-bootstrap';



function LandingPageButton() {

    return <Link to="/about" className="nav-link">
        <button className="btn btn-primary" role="button" > 
            <span style={{"font-size": "24px"}}>
                Become-a-Master
            </span>
        </button>
    </Link>
}

function Button1() {

    return <Link to="/profile" className="nav-link">
        {/* <View style={{ flexDirection: "row" }}> */}
        <button className="bttn" role="button" > 
            <span style={{"font-size": "24px"}}>
                <h3>Player's Profile</h3>
            </span>
        </button>
        {/* </View> */}
    </Link>
}
        

function Button2() {

    return <Link to="/stats" className="nav-link">
        {/* <View style={{ flexDirection: "row" }}> */}
        <button className="bttn" role="button" > 
            <span style={{"font-size": "24px"}}>
                <h3>Check Stats</h3>
            </span>
        </button>
    </Link>
}

function Button3() {

    return <Link to="/titleplayer" className="nav-link">
        {/* <View style={{ flexDirection: "row" }}> */}
        <button className="bttn" role="button" > 
            <span style={{"font-size": "24px"}}>
                <h3>Titled Player</h3>
            </span>
        </button>
        </Link>
}
function Button4() {

    return <Link to="/leaderboard" className="nav-link">
        {/* <View style={{ flexDirection: "row" }}> */}
        <button className="bttn" role="button" > 
            <span style={{"font-size": "24px"}}>
                <h3>LeaderBoard</h3>
            </span>
        </button>       
        
    </Link>
}

// function InputPage(){
    
//     return (
//     <form>
//         <label htmlFor="fname"><p><b>Search Player by name : </b></p></label>
//         <input type="text" id="fname" name="fname" />
//     </form>
//     )
// }

function LandingFrameMessage() {

    const style = {
        margin: "0%",
        // padding: "5% 20% 20% 5%",
        
    }

    return <div style={style}>
        
        <div style={{"fontSize": "90px"}}>
            <h1>Hello chessmasters!!!</h1>
        </div>
        
        <div style={{"fontSize": "36px"}}>
            <h2>Take your chess game to the next level </h2>
            
        </div>

        <br />

        <LandingPageButton />
        
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />

        
    </div>
}

function LandingFrame() {
    const style = {

        "background-image": `url("images/chesss.png")`,
        "background-repeat": "no-repeat",
        "background-size":"cover",
        position: "relative",
        height: "500px",
        width: "100%",
        padding :"10px",
        margin:"0px"
    }

    return <div style={style}>
        
        <LandingFrameMessage /> 
               
    </div>
}

function HomePage() {
    return <div>
        <LandingFrame />
{/*         

        <InputPage /> */}
    </div>
}

export default HomePage