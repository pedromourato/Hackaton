import { MongoClient } from "mongodb";
const DB_NAME = "hack302"
const COLLECTION_USERS = "clients"
const COLLECTION_SESSIONS = "sessions"
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"

let client;

export  async function connectToMongo() {
    try {
        if (!client) { client = await MongoClient.connect(URL)}
        return client
    } catch (errors) {
        console.log(errors)
    }
}

export  async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return  await client.db(dbName).collection(collectionName)
}
async function populate() {
    const collection = await getMongoCollection("hack301", "clients")

    await collection.insertOne([
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

populate()
    .then(() => populate())
    .then(() => console.log("Done Populating"))
    .catch((err) => console.log(err))