import Header from "./components/NavBar"
import Items from "./components/ItemListContainer"
import ItemsDetail from "./components/ItemDetailContainer"

const App = () => {
    return (
        <div>
            <Header/>
            <Items/>
            <ItemsDetail/>
        </div>
    )
};

export default App;