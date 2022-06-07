import ItemCount from "./ItemCount"

const ItemListContainer = () => {
    return (
        <div class="card text-center col-3">
            <div class="card-body">
                <h1>
                    Playstation 5 Standard
                </h1>
                <p>Consola PS5 edición física 825Gb</p>
                <img class="product-image" src="https://www.atajo.com.ar/images/0000PS5-STANDARD000459501PS5-STANDARD-Consola-Playstation-PS5-Standard-04.jpg"></img>
                
            </div>
            <div class="card-footer">
            <ItemCount stock={5} initial={1} onAdd={true}/>
            </div>
            
        </div>
    )
}

export default ItemListContainer;