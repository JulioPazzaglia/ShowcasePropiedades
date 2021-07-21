const { Houses, Category } = require("./models")

// const db = require("./config/db")
// const axios = require("axios")

const categories= ["Categoria 1","Categoria 2","Categoria 3", "Categoria 4"]

const departamentos = [
    {
        name: "Paraguay al 5300",
        description: "Dos ambientes a estrenar, living comedor, cocina, toilette, dormitorio en suite. SUM y laundryUbicado en la mejor zona de Palermo Hollywood, cerca de los mejores restaurantes gourmet de Buenos Aires. Palermo Hollywood es una de las zonas con mayor crecimiento en los últimos 10 años, en su carácter residencial y comercial, en donde hoy se encuentran grandes torres, comercios y hoteles boutique para el turismo internacional.",
        price: 170000,
        location: "Palermo",
        image: "https://static.tokkobroker.com/pictures/1865826284913913554274262074385475358537518730320429707759225201637623224996.jpg",
        available: true,
    },
    {
        name: "Quartier Demaria Godoy Cruz al 3000",
        description: "Alquiler 4 ambientes, tres dormitorios, uno en suite, living comedor, cocina, comedor diario, dependencia de servicio. Cochera fija.Exclusivo complejo compuesto por dos torres de 27 pisos ubicado en Palermo Nuevo. Quartier Demaria fue la primera de la marca Quartier constituyendo un Hito de la marca en los años 90.",
        price: 125000,
        location: "Palermo",
        image: "https://imgar.zonapropcdn.com/avisos/1/00/45/50/08/35/1200x1200/1713699779.jpg",
        available: true,
    },
    {
        name: "Ayacucho al 1800",
        description: "Cuatro ambientes, en planta baja con vista al jardín, muy buen edificio. Living comedor, tres dormitorios con buenos placares. Ventanales con vista al patio. Un baño completo y toilette de recepción. Jardin de invierno. Amplia cocina con comedor diario, lavadero, dependencia y baño de servicio. Gran patio de uso exclusivo de 107m2",
        price: 415000,
        location: "Recoleta",
        image: "https://static.tokkobroker.com/pictures/87158196392889601351431574040794750622963872872120847380270001842117200372631.jpg",
        available: false,
    },
    {
        name: "Callao al 1300",
        description: "Edificio señorial. Excelente Ubicación.Semi piso al contrafrente. Plano invertido. Piso alto. Palier semiprivado. Living y comedor. Toilette. Dos dormitorios muy luminosos al contrafrente con salida a Balcón. Pulmón de manzana muy luminoso y super amplio. Baño completo con ventana externa. Muy buenos placards. Cocina con lavadero aparte. Dependencia, baño y entrada de servicio.",
        price: 285000,
        location: "Recoleta",
        image: "https://static.tokkobroker.com/pictures/64990624028934073010943343642479548486918515567647198171070102825004276416576.jpg",
        available: true,
    },
    {
        name: "Las Heras al 1900",
        description: "Duplex muy luminoso. Doble altura de techos con entrepiso. Living comedor con cocina en PB . Planta alta 1 dormitorio con excelente placard y Baño completo. Ventanal doble.",
        price: 150000,
        location: "Recoleta",
        image: "https://static.tokkobroker.com/pictures/35269119973625018819685996526656744003804791978484157405470171179351223908496.jpg",
        available: true,
    },
    {
        name: "Esmeralda al 1300",
        description: "Oficina en esquina, llena de luz y sol. Edificio de gran categoría. Estilo Frances. Techos altos. Semipiso con palier semi privado, recepción, dos grandes despachos a la calle divididos por puerta corrediza en esquina circular, pisos de roble, tercer despacho a Libertador, sala de reuniones a Libertador, tercer oficina, cocina chiquita, los toilettes, deposito, calefacción central por aire, agua y aire acondicionado central.",
        price: 360000,
        location: "Retiro",
        image: "https://static.tokkobroker.com/pictures/18229104053711569315798243671279904102261101158087673186379053313911042218543.jpg",
        available: false,
    },
    {
        name: "Esmeralda al 1000",
        description: "Espectacular vista al jardín central y al Palacio Paz. Planta libre con posibilidad de dividir con balcón, toilette, baño completo y cocina integrada. Climatización mediante sistema VRV frío calor, con panel de comando en la unidad. 1 cocheras.",
        price: 558000,
        location: "Retiro",
        image: "https://static.tokkobroker.com/pictures/108031625454224449375156639595717991761350393303608573742497422977113357272915.jpg",
        available: true,
    },
    {
        name: "Maure al 3800",
        description: "Excelente PH en muy buena ubicación. Hall de recepcion, living comedor, escritorio o dependencia de servicio. Toilette, cocina comedor, patio, lavadero. Arriba: Dos dormitorios con baño completo y amplio hall de distribución.",
        price: 380000,
        location: "Belgrano",
        image: "https://static.tokkobroker.com/pictures/4374260735813162448338713323852266727075346868693014100183334029519595608434.jpg",
        available: true,
    },
    {
        name: "Cabildo al 2100",
        description: "Tres ambientes en Belgrano. Living comedor con salida a balcón corrido con vista a la plaza Juramento 'La Redonda', cocina, lavadero, baño completo, dos dormitorios. Servicios centrales.",
        price: 175000,
        location: "Belgrano",
        image: "https://static.tokkobroker.com/pictures/40004077024888928816874445828533360864869946833094845125507567841866923170622.jpg",
        available: false,
    }
]

const seed = () => {
    console.log("SEED STARTING")
    
    categories.map(async item => {
        await Category.create({ name: item })
    })

    departamentos.map(inmuebles => {
        Houses.create(inmuebles).then(inmuebleCreado => {
          const id = Math.round(Math.random()*3+1)
          Category.findByPk(id).then(category => {
            inmuebleCreado.addCategory(category)
            })
        })
    })
}

seed()