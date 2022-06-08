const { getMongoCollection } = require("./mongoDb")

async function populateClients() {
    const collection = await getMongoCollection("hack301", "clients")

    await collection.insertMany([
        new Product(
            "Alberto",
            "alberto@gmail.com",
            "Qwerty123."
        )
    ])
}

class Product {
    constructor(name, email, password) {
        this.name = name,
        this.email = email,
        this.password = password

    }
}

populateClients()
    .then(() => populateClients())
    .then(() => console.log("Done Populating"))
    .catch((err) => console.log(err))