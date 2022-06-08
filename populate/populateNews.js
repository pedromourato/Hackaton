const { getMongoCollection } = require("./mongoDb")

async function populateNews() {
    const collection = await getMongoCollection("hack301", "news")

    await collection.insertMany([
        new Product(
            "Surf Fest Caparica",
            "Não perca este verão o melhor festival de surf",
            "URL"
        )
    ])
}

class Product {
    constructor(titulo, texto, imagePath) {
        this.titulo = titulo,
        this.texto = texto,
        this.imagePath = imagePath

    }
}

populateNews()
    .then(() => populateNews())
    .then(() => console.log("Done Populating"))
    .catch((err) => console.log(err))