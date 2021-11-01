
const catalogoProducto = [
    {   id: 1, 
        title:"Skin Mask",
        categoria: "facial",
        description: 'Nuevo producto',
        price: 150,
        pictureUrl: 'assets/lidherma/skinMask.jpeg',
        stock: 15
    },
    {   id: 2, 
        title:"Delineador",
        categoria: "facial",
        description: 'Nuevo producto', 
        price: 470, 
        pictureUrl: 'assets/lidherma/delineador.jpeg',
        stock: 30
    },
    {   id: 3, 
        title:"Bronceador B2",
        categoria: "corporal",
        description: 'Nuevo producto', 
        price: 200, 
        pictureUrl: 'assets/lidherma/bronceador.jpeg',
        stock: 25
    },
    {   id: 4, 
        title:"Purificador",
        categoria: "corporal",
        description: 'Nuevo producto', 
        price: 340, 
        pictureUrl: 'assets/lidherma/hydrapore.jpeg',
        stock: 50
    }
    
]

export const RenderUnProducto = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(catalogoProducto)
    }, 2000)
})



const productos = [
    {   id: 1, 
        title:"Skin Mask",
        categoria: "facial",
        description: 'Nuevo producto',
        price: 150,
        pictureUrl: 'assets/lidherma/skinMask.jpeg',
        stock: 15
    },
    {   id: 2, 
        title:"Delineador",
        categoria: "facial",
        description: 'Nuevo producto', 
        price: 470, 
        pictureUrl: 'assets/lidherma/delineador.jpeg',
        stock: 30
    },
    {   id: 3, 
        title:"Bronceador B2",
        categoria: "corporal",
        description: 'Nuevo producto', 
        price: 200, 
        pictureUrl: 'assets/lidherma/bronceador.jpeg',
        stock: 25
    },
    {   id: 4, 
        title:"Purificador",
        categoria: "corporal",
        description: 'Nuevo producto', 
        price: 340, 
        pictureUrl: 'assets/lidherma/hydrapore.jpeg',
        stock: 50
    }
]


export const renderPantalla = new Promise ((resolve, reject) => {
     //tareas asincronicas
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    }
)

   

