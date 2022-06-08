import { findUserById, findCartByUserId, createCart } from "../data/cart"

export async function addToCart(bookId, clientId, res){
    //Verificar se o utilizador existe através do clientId
    const user = await findUserById(clientId)
    console.log(user)
    if (!user) {
        return res.status(404).json()//404
        }

    //queremos obter o carrinho através do clientId
    const cart = await findCartByUserId(clientId)
    if (!cart) {
        await createCart(clientId, [{ bookId }])
        //se não existe carrinho,
        //criar carrinho

        return res.status(201).json()//201
    }
    //verificar se o produto existe no carrinho

    if (cart.items.some(item => item.bookId == bookId)) {
        //se tiver
        //atualizamos a quantity
        const itensAtualizados = cart.items.map(item => (
            item.bookId == bookId
                ? { ...item,}
                : item
        ))
        await createCart(clientId, itensAtualizados)
        return res.status(201).json()//201

    } else {
        await createCart(clientId, [...cart.items, { bookId }])
        //se nao tiver
        //adicionamos a quantity e o bookId
        return res.status(201).json()//201
    }
}