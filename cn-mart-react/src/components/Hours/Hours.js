import style from "./Hours.module.css"

export default function Hours() {
    return <div className={style.container}>
        <h1>Hours</h1>
        <ul>
            <li>Mon : 7am - 10pm</li>
            <li>Tue : 7am - 10pm</li>
            <li>Wed : 7am - 10pm</li>
            <li>Thur : 7am - 10pm</li>
            <li>Fri : 7am - 10pm</li>
            <li>Sat : 7am - 10pm</li>
            <li>Sun : Closed</li>
        </ul>
    </div>
}