import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <header>
    <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid col-12">
                <Link to="/"><h1 className="navbar-brand brand-title">CompuWorld</h1></Link>
                <div>
                    <div className="nav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/category/pccomponents" >Componentes de PC</Link></li>
                            <li className="nav-item"><Link to="/category/consoles" >Consolas</Link></li>
                            <li className="nav-item"><Link to="/category/peripherals" >Periféricos</Link></li>
                            <li className="nav-item"><Link to="/category/accessories" >Accesorios</Link></li>
                            <li><CartWidget/></li>
                        </ul>
                    </div>
                </div>
            </div>
    </nav>
    </header>
    )
}

export default NavBar;