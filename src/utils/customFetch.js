import productos from './productos.js'

export const customFetch = () => {
    
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(product => product.id === id));
        }, 500);
    })
}

export const getProductByCategory = (category) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(product => product.category === category));
        }, 500);
    })
}