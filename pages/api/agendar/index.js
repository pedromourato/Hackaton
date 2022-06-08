import { addAula } from "../../../data/cart"

export default async function (req, res) {
    if (req.method === "POST") {
        console.log(req.body)
        const { agendarAula, clientId } = req.body
        console.log("roberto")
        let a = await addAula(agendarAula, clientId, res)
        console.log(a)
        res.send(200).json({a})
    }
}
