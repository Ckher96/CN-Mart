import style from './ItemCard.module.css'

export default function ItemCard({item}) {
    return (
        <div className={style.card}>
            <h3>{item.name}</h3>
            <div>img</div>
            <h4>{item.price}</h4>
        </div>
    )
}