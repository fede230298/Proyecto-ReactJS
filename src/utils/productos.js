/* {
    id:,
    name:"",
    precio:,
    descripcion:,
    image:,
    stock:,

}, */

const productos = [
    {
        id:1,
        name:"PlayStation 5",
        category:"consoles",
        precio:150000,
        descripcion:"Consola PlayStation 5 + Joystick. Consola de videojuegos de última generación. Admite resolucion de 4K y HDR. ",
        image:"https://www.atajo.com.ar/images/0000PS5-STANDARD000459501PS5-STANDARD-Consola-Playstation-PS5-Standard-04.jpg",
        stock:5,

    },
    {
        id:2,
        name:"Xbox Series S",
        precio:90000,
        category:"consoles",
        descripcion:"Consola Xbox Series S + Joystick. Consola de videojuegos de última generación. Admite resolucion de 4K y HDR. Microsoft Xbox Series S es una consola de videojuegos de última generación, que se encuentra disponible en todos los paises del mundo.",
        image:"https://www.tradeinn.com/f/13777/137776928/microsoft-xbox-consola-xbox-series-s-512gb.jpg",
        stock: 5
    },
    {
        id:3,
        name:"Nintendo Switch",
        precio:85000,
        category:"consoles",
        descripcion:"Nintendo Switch OLED + 256 GB. Nintendo Switch es una consola de videojuegos de última generación, que se puede utilizar de forma portatil o en su dock para utilizarla como consola de sobre mesa",
        image:"https://improstock.com.ar/wp-content/uploads/2021/08/N2.jpg",
        stock:10,
    
    },
    {
        id:4,
        name:"Joystick PS5",
        precio:12000,
        category:"peripherals",
        descripcion:"Dualsense PS5 Color Blanco",
        image:"https://www.cetrogar.com.ar/media/catalog/product/e/l/el2308-3.jpg?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds",
        stock:20
    },
    {
        id:5,
        name:"Joystick Xbox X/S",
        precio:12000,
        category:"peripherals",
        descripcion:"Joystick Xbox X/S Color Blanco",
        image:"https://www.electronicthings.com.ar/uploads/centum/articles/original/13245901_2.jpg",
        stock:20
    },
    {
        id:6,
        name:"Pro Controller Nintendo Switch",
        precio:8000,
        category:"peripherals",
        descripcion:"Pro Controller Nintendo Switch Color Negro",
        image:"https://www.soscomputacion.com.ar/13659/joystick-inalambrico-nintendo-switch-pro-controller-original.jpg",
        stock:15
    },
    {
        id:7,
        name:"Auriculares PlayStation Pulse 3D Blanco y Negro",
        precio:18000,
        category:"accessories",
        descripcion:"Auricular inalámbrico Sony Playstation Pulse 3D",
        image:"https://http2.mlstatic.com/D_NQ_NP_2X_915946-MLA46387566812_062021-F.webp",
        stock:5
    },
    {
        id:8,
        name:"Auriculares Xbox Series X/S Negro",
        precio:13000,
        category:"accessories",
        descripcion:"Auricular inalámbrico Xbox Series X/S Edicion Oficial",
        image:"https://d2ye0ltusw47tz.cloudfront.net/12988795-large_default/auriculares-xbox-series-x-s-2021-edition-oficial.jpg",
        stock:5
    },
    {
        id:9,
        name:"Microprocesador AMD Ryzen 7 5700X",
        precio:50000,
        category:"pccomponents",
        descripcion:"Microprocesador AMD Ryzen 7 5700X Socket AM4",
        image:"https://hardcorecomputacion.com.ar/wp-content/uploads/2021/08/61DYLoyNRWL._AC_SX466_.jpg",
        stock:3
    },
    {
        id:10,
        name:"Microprocesador Intel Core i7-12700K",
        precio:60000,
        category:"pccomponents",
        descripcion:"Microprocesador Intel Core i7-12700K Socket LGA1700",
        image:"https://hardcorecomputacion.com.ar/wp-content/uploads/2022/02/12700-768x768.jpg",
        stock:3
    }
]

export default productos;

