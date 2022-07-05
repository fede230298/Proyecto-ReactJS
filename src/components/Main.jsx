import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import { Route,Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import Checkout from "./Checkout"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:category" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>   
        </main>
    )
}

export default Main;