import { NavLink } from "react-router-dom";
import style from "./about.module.css";
export default function About() {
    return (<div className={style.continer}>
        <div className={style.imagen}>
            <NavLink className={style.boton} to="/home"> {"<   "} Go home</NavLink>
        </div>
    </div>)
}