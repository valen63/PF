
import { NavLink } from "react-router-dom"
import "./prices.css"
export default function Prices() {

    return (<div className="body"><div className="Contenedorprecios">
        <div className="cardd">
            <div className="imgBox">
                <img src="https://i.pinimg.com/originals/ad/0a/a2/ad0aa24baa0ba9a355d275da98e35e92.png" alt="mouse corsair" className="mouse" />
            </div>

            <div className="contentBox">
                <h3>Desbloquear un Curso por un Año</h3>
                <h2 className="price">4.<small>98</small> € </h2>
                <NavLink to="/pagar/OneCourseYear" className="buy">Buy Now</NavLink>
            </div>
        </div>

        <div className="cardd">

            <div className="imgBox">
                <img src="https://www.nicepng.com/png/full/218-2186702_related-wallpapers-software-de-programacion-png.png" alt="mouse corsair" className="mouse" />
            </div>
            <div className="contentBox">
                <h3>Desbloquear Todos los cursos</h3>
                <h2 className="price">14.<small>50</small> €  <small> /Mes</small></h2>
                <NavLink to="/pagar/AllOneMount" className="buy">Buy Now</NavLink>
            </div>
        </div>
        <div className="cardd best">

            <div className="imgBox">
                <img src="https://sites.google.com/site/profeappinventor/_/rsrc/1511509657092/la-programacion-hoy-dia/leng4.png" alt="mouse corsair" className="mouse" />
            </div>
            <div className="contentBox">
                <h3>Desbloquear Todos los cursos</h3>
                <h2 className="price">40.<small>00</small> €  <small> /Anual</small></h2>
                <NavLink to="/pagar/AllOneYear" className="buy">Buy Now</NavLink>
            </div>
        </div>
    </div>
    </div>)
}
