const products = [
    {
      id: "1",
      name: "Polera Sea Turtles Long Sleeve",
      price: 1000,
      category: "poleras",
      img: "https://onlyny.com/cdn/shop/files/Onlyny665886046eda7898723041665886046edad.665886046edad_1080x.jpg?v=1717079591",
      stock: 25,
      description: "100% algodón cardado 20/1, Gráfico serigrafiado, Hecho en Perú.",
    },
    {
      id: "2",
      name: "Polera Bodega Naps",
      price: 800,
      category: "poleras",
      img: "https://onlyny.com/cdn/shop/files/Onlyny6658860281ce82180248946658860281cec.6658860281cec_1080x.jpg?v=1717078366",
      stock: 16,
      description: "100% algodón cardado 20/1, Gráfico serigrafiado, Hecho en Perú.",
    },
    {
      id: "3",
      name: "Polera SSS Deflater",
      price: 1100,
      category: "poleras",
      img: "https://onlyny.com/cdn/shop/files/Onlyny65f2ea28c4a7d92556973365f2ea28c4a85.65f2ea28c4a85_1080x.jpg?v=1710418528",
      stock: 3,
      description: "100% algodón cardado 20/1, Gráfico serigrafiado, Hecho en Perú.",
    },
    {
        id: "4",
        name: "Polera City Tennis Pocket",
        price: 900,
        category: "poleras",
        img: "https://onlyny.com/cdn/shop/files/Onlyny663bf2ac6debd156998725663bf2ac6dec6.663bf2ac6dec6_1080x.jpg?v=1715267994",
        stock: 10,
        description: "100% algodón cardado 20/1, Gráfico serigrafiado, Hecho en Perú.",
      },
      {
        id: "5",
        name: "Polerón Floral Directory",
        price: 1500,
        category: "polerones",
        img: "https://onlyny.com/cdn/shop/files/Onlyny65e8f373ca10b165e8f373ca339.4019901865e8f373ca339_1080x.jpg?v=1709765519",
        stock: 10,
        description: "Polar cepillado 100 % algodón de peso medio, gráfico serigrafiado, canalé 1x1 en puños y dobladillo, fabricado en Perú.",
      },
      {
        id: "6",
        name: "Polerón Rodent Quarter",
        price: 1700,
        category: "polerones",
        img: "https://onlyny.com/cdn/shop/files/Onlyny65c4efe42cd4080692663265c4efe42cd48.65c4efe42cd48_1080x.jpg?v=1707406315",
        stock: 10,
        description: "100% cotton, Embroidered Graphic, Quarter Zip.",
      },
      {
        id: "7",
        name: "Polerón NYC City of New York",
        price: 1500,
        category: "polerones",
        img: "https://onlyny.com/cdn/shop/files/Onlyny659448f8caa886659448f8cad36.58861699659448f8cad36_1080x.jpg?v=1704216875",
        stock: 10,
        description: "Polar cepillado 100 % algodón de peso medio, gris jaspeado: mezcla 100 % algodón y poliéster, gráfico serigrafiado.",
      },
      {
        id: "8",
        name: "Polerón Colorblock Raglan",
        price: 2000,
        category: "polerones",
        img: "https://onlyny.com/cdn/shop/files/Onlyny663bf2ab51c19515472722663bf2ab51c20.663bf2ab51c20_1080x.jpg?v=1715879618",
        stock: 10,
        description: "Polar cepillado 100 % algodón de peso medio, cuerpo principal de grano cruzado, paneles laterales para un mejor ajuste.",
      },
      {
        id: "9",
        name: "Gorra Gull Polo",
        price: 700,
        category: "gorras",
        img: "https://onlyny.com/cdn/shop/files/Onlyny665883e8f2c74896991238665883e8f2c79.665883e8f2c79_1080x.jpg?v=1717077727",
        stock: 10,
        description: "Sarga chino 100 % algodón, gorra de 6 paneles, gráfico bordado.",
      },
      {
        id: "10",
        name: "Gorra Sportswear Mesh 5-Panel",
        price: 800,
        category: "gorras",
        img: "https://onlyny.com/cdn/shop/files/Onlyny65e8dab474ceb89147838365e8dab474cf2.65e8dab474cf2_1080x.jpg?v=1709826784",
        stock: 10,
        description: "Visera y panel frontal/superior 100% nailon liviano, gorra de malla gigante de poliéster, gráfico serigrafiado.",
      },
      {
        id: "11",
        name: "Crochet Bucket Hat",
        price: 1000,
        category: "gorras",
        img: "https://onlyny.com/cdn/shop/files/Onlyny65e8dafa41bd166825510365e8dafa41bd8.65e8dafa41bd8_1080x.jpg?v=1709760196",
        stock: 10,
        description: "100% algodón acrílico hilado en hilo, gráfico tejido, importado.",
      },
      {
        id: "12",
        name: "Gorra Contrast Webbing 5-Panel",
        price: 750,
        category: "gorras",
        img: "https://onlyny.com/cdn/shop/files/Onlyny663bf2a622b3d053413382663bf2a622b45.663bf2a622b45_1080x.jpg?v=1715260568",
        stock: 10,
        description: "Visera y panel frontal 100% nailon ligero, gráfico serigrafiado.",
      },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productoId));
      }, 1000);
    });
  };