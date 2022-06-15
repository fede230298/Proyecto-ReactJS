import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import { Route,Routes } from "react-router-dom";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:category" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
            </Routes>   
        </main>
    )
}

export default Main;