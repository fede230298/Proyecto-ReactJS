import Header from "./components/NavBar"
import Main from "./routes/Main"
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./context/CartContext";

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