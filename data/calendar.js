import { getMongoCollection } from "./signupin"
const DB_NAME = "hack302"
const COLLECTION_CALENDAR = "calendar"

export async function findMonthYear() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_CALENDAR)
    return await collection.find().toArray()
}

export async function createMonth(month, year) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_CALENDAR)
    return await collection.insertOne({ month: month, year: year, class: new Array(31) })
}