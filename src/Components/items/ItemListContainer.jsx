import { ItemCount } from "./ItemCount"

export const ItemListContainer = ({greeting}) => {
    return(
        <>
            <h2>{greeting}</h2>
            <ItemCount stock={10} initial={0}/>
        </>
    )
}