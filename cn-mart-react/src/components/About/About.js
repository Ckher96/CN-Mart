import { useState } from "react"
import style from "./About.module.css"

function About() {
    const [p, setP] = useState("hello")

    return (
        <div>
            <h1 className={style.AboutH1}>About</h1>
        <p>{p}</p>
        <input value={p} onChange={(e) => {
            setP(e.target.value)
        }} />
        </div>
        
    )
}

export default About