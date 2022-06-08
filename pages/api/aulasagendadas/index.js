import { getAula } from "../../../data/cart"

export default async function (req, res) {
    if (req.method === "POST") {
        console.log(req.body)
        const { clientId } = req.body
        console.log("c")
        let a = await getAula(clientId)
        console.log(a)
        res.send(200).json({a})
    }
}