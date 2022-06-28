import Header from "./components/NavBar"
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./CartContext";

const App = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <Header/>
                <Main/>
            </CartProvider>
        </BrowserRouter>
    )
};

export default App;