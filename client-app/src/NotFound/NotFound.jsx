import { NavLink } from "react-router-dom";
import style from "./Not.module.css";
export default function NotFound({btn}) {
    return (<div className={style.continer}>
        <div className={style.imagen}>
            {btn? <NavLink className={style.boton} to="/home"> {"<   "} Go home</NavLink>:null}
        </div>
    </div>)
}