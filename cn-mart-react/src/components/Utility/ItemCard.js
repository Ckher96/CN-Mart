import { useContext } from 'react'
import style from './ItemCard.module.css'
import { CartContext } from '../../Context/CartContext'

export default function ItemCard({item}) {
    const {setCart} = useContext(CartContext)

    const clickHandler = () => {
        setCart((p) => [...p, item])
    }

    return (
        <div className={style.card}>
            <h3>{item.name}</h3>
            <div>img</div>
            <h4>{item.price}</h4>
            <button onClick={clickHandler}>Add To Cart</button>
        </div>
    )
}