import {Link} from "react-router-dom"
import "./header.css";
function Header() {
    
    return (
        <nav className="navbar">
            <div className="container-fluid">

                <div className="heading"><div className="this"><b>Chess Masters</b></div></div>

                <ul className="nav nav-tabs">

                    <li className="nav-item">
                        <Link to="/" className="nav-link"><b>Home</b></Link>
                    </li>

                    <li classNmae="nav-item">
                        <Link to="/about" className="nav-link"><b>About</b></Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Header;
