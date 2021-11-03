
export const renderPantalla = new Promise ((resolve, reject) => {
    //tareas asincronicas
       setTimeout(()=>{
           resolve(productos)
       }, 2000)
   }
)

export const RenderUnProducto = new Promise ((resolve, reject)=>{
   setTimeout(()=>{
       resolve(productos)
   }, 2000)
})

const productos = [
    {   id: '1', 
        title:"Skin Mask",
        categoria: "rostro",
        description: 'Máscara facial de suave emoliencia que ayuda a reparar e hidratar la piel. ',
        price: 390,
        pictureUrl: 'https://www.lidherma.com/uploads/ldh_skinbioma_mask_pouche1.jpg',
        stock: 9
    },
    {   id: '2', 
        title:"Delineador",
        categoria: "maquillaje",
        description: 'Delineador retráctil con textura gel. De color intenso, fácil aplicación y con alto poder cubritivo.', 
        price: 1.325, 
        pictureUrl: 'https://www.lidherma.com/uploads/waterproof_eyeliner_mobile1.png',
         stock: 7
    },
    {   id: '3', 
        title:"Bronceador B2",
        categoria: "rostro",
        description: 'Emulsión autobronceante que proporciona a la piel hidratación y un bronceado natural, uniforme y sin sensación de grasitud. ', 
        price: 2.015, 
        pictureUrl: 'https://www.lidherma.com/uploads/ldh_total_bronze_150g_mobile_001.jpg',
        stock: 5
    },
    {   id: '4', 
        title:"Hydrapore",
        categoria: "rostro",
        description: 'Crema gel muy suave y fresca. Contiene aquaporinas que transportan el agua entre las células y mejoran el sistema de hidratación natural y la resistencia de la piel. ', 
        price: 2.245, 
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_687004-MLA43395203824_092020-V.jpg',
        stock: 10
    },
    {   id: '5', 
        title:"Renovador Facial",
        categoria: "rostro",
        description: 'Renovador celular a base de enzimas proteolíticas que actúan al mismo pH que la piel y producen un proceso natural de descamación.', 
        price: 1.975, 
        pictureUrl: 'https://www.lidherma.com/uploads/ldh_renovage_pieles_sensibles.jpg',
        stock: 15
    },
    {   id: '6', 
        title:"Blanqueador Vitamin C",
        categoria: "rostro",
        description: 'Gel para rostro con una innovadora molécula de vitamina C, alfa arbutina y ácido hialurónico que atenúan los signos del envejecimiento, mejoran la formación de colágeno y unifican el tono de la piel.', 
        price: 1.972, 
        pictureUrl: 'https://www.lidherma.com/uploads/serum_vitaminac_antioxidante.jpg',
        stock: 4
    },
    {   id: '7', 
        title:"Antiage Hialurónico 4D eyes",
        categoria: "rostro",
        description: 'Crema gel para el contorno del ojo con la sinergia del hialurónico 4D y un hexapéptido biomimético amplificado.', 
        price: 2.775, 
        pictureUrl: 'https://www.lidherma.com/uploads/ldh_hyaluronic_4d_eyes_15g_abierto_001_mobile1.jpg',
        stock: 18
    },
    {   id: '8', 
        title:"Dherma Science",
        categoria: "rostro",
        description: 'Crema que mejora el aspecto integral del contorno del ojo.', 
        price: 2.565, 
        pictureUrl: 'https://www.lidherma.com/uploads/contorno_de_ojos_drone_antiage.jpg',
        stock: 14
    },
    {   id: '9', 
        title:"Dherma tense",
        categoria: "rostro",
        description: 'Solución sedosa de alta concentración que combina activos de gran poder tensor.', 
        price: 1.975, 
        pictureUrl: 'https://www.lidherma.com/uploads/lanzamiento_ldh_400x517_mobile_001.jpg',
        stock: 2
    },
    {   id: '10', 
        title:"Celluporine",
        categoria: "rostro",
        description: 'Crema que produce un potente efecto anticelulítico porque actúa sobre el metabolismo celular. ', 
        price: 2.772, 
        pictureUrl: 'https://www.lidherma.com/uploads/ldh_celluporine_180g_mobile_001.jpg',
        stock: 6
    },
    {   id: '11', 
        title:"Aqua Shot Crema",
        categoria: "corporal",
        description: 'Crema corporal con alta capacidad de hidratación. ', 
        price: 1.365, 
        pictureUrl: 'https://www.lidherma.com/uploads/ldh_aquashot_corporal5.jpg',
        stock: 5
    },
    {   id: '12', 
        title: "Celulitis Crema",
        categoria: "corporal",
        description: 'Crema facial y corporal muy emoliente que combina múltiples activos en film molecular. ', 
        price: 2.305, 
        pictureUrl: 'https://www.lidherma.com/uploads/ldh_cellactive_massage_180g_mobile1.jpg',
        stock: 5
    },
    {   id: '13', 
        title:"Post Solar",
        categoria: "corporal",
        description: 'Loción sprayable postsolar con activos que reparan y protegen del efecto de las radiaciones UVA y UVB. ', 
        price: 1.385, 
        pictureUrl: 'https://www.lidherma.com/uploads/ldh_brumissage_200ml_mobile_nuevo.jpg',
        stock: 10
    },
    {   id: '14', 
        title:"Lipstick Red",
        categoria: "maquillaje",
        description: 'Barra labial hidratante con aceite de coco.', 
        price: 1.125, 
        pictureUrl: 'https://www.lidherma.com/uploads/mmk_lipstick_red_mobile_001.jpg',
        stock: 50
    },
    {   id: '15', 
        title:"Lipstick Wine",
        categoria: "maquillaje",
        description: 'Barra labial hidratante con aceite de coco.', 
        price: 1.125, 
        pictureUrl: 'https://www.lidherma.com/uploads/mmk_lipstick_wine.jpg',
        stock: 14
    },
    {   id: '16', 
        title:"Pincel Powder",
        categoria: "maquillaje",
        description: 'La brocha perfecta para el finishing con polvo compacto.', 
        price: 2.065, 
        pictureUrl: 'https://www.lidherma.com/uploads/mmk_pincel_powder1.jpg',
        stock: 4
    },
    {   id: '17', 
        title:"Eyes shodow Nude",
        categoria: "maquillaje",
        description: 'Dúo de sombras para párpados intensamente pigmentadas que proporcionan una alta durabilidad.', 
        price: 1.132, 
        pictureUrl: 'https://www.lidherma.com/uploads/mmk_eyeshadow_2.jpg',
        stock: 6
    },
    {   id: '18', 
        title:"Pincel Concealer",
        categoria: "maquillaje",
        description: 'Concealer, un nivel profesional en la corrección e iluminación.', 
        price: 1.125, 
        pictureUrl: 'https://www.lidherma.com/uploads/acce_0166_pincel_concealer1.png',
        stock: 12
    },
    {   id: '19', 
        title:"Concealer Neutral",
        categoria: "maquillaje",
        description: 'Corrector fluido con activos que protegen la piel y ayudan a mejorar el aspecto de arrugas, bolsas y ojeras.', 
        price: 1.434, 
        pictureUrl: 'https://www.lidherma.com/uploads/mmk_serum_concealer_neutral.jpg',
        stock: 15
    },
    {   id: '20', 
        title:"Mascara de pestañas",
        categoria: "maquillaje",
        description: 'Máscara mousse de textura soft para tratamiento de pestañas.', 
        price: 1.515, 
        pictureUrl: 'https://www.lidherma.com/uploads/mmk_treatment_mascara_black_mobile1.jpg',
        stock: 5
    },
    {   id: '21', 
        title:"Base beige",
        categoria: "maquillaje",
        description: 'Maquillaje compacto con SPF 40 que asegura una protección de amplio espectro UVB y UBA.', 
        price: 2.235, 
        pictureUrl: 'https://www.lidherma.com/uploads/mmk_cream_powder_beige_mobile1.jpg',
        stock: 7
    }
    
]
