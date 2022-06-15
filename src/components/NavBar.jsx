import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <header>
    <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid col-12">
                <Link to="/"><h1 className="navbar-brand">CompuWorld</h1></Link>
                <div>
                    <div className="nav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/category/pccomponents" >PC Components</Link></li>
                            <li className="nav-item"><Link to="/category/consoles" >Consoles</Link></li>
                            <li className="nav-item"><Link to="/category/peripherals" >Peripherals</Link></li>
                            <li className="nav-item"><Link to="/category/accessories" >Accessories</Link></li>
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </div>
    </nav>
    </header>
    )
}

export default NavBar;