import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
    <header>
    <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid col-12">
                <a class="navbar-brand" href="#">CompuWorld</a>
                <div class="">
                    <div class="nav">
                        <a class="nav-link " href="#">PC Components</a>
                        <a class="nav-link" href="#">Consoles</a>
                        <a class="nav-link" href="#">Peripherals</a>
                        <a class="nav-link" href="#">Accessories</a> 
                        <CartWidget/>
                    </div>
                </div>
            </div>
    </nav>
    </header>
    )
}

export default NavBar;