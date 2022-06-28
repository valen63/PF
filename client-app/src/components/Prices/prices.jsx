
import { NavLink } from "react-router-dom"
import "./prices.css"
export default function Prices() {

    return (<div class="body"><div class="Contenedorprecios">
        <div class="card">

            <div class="imgBox">
                <img src="https://i.pinimg.com/originals/ad/0a/a2/ad0aa24baa0ba9a355d275da98e35e92.png" alt="mouse corsair" class="mouse" />
            </div>

            <div class="contentBox">
                <h3>Desbloquear un Curso</h3>
                <h2 class="price">4.<small>98</small> € </h2>
                <NavLink to="/Pagar/1" class="buy">Buy Now</NavLink>
            </div>
        </div>

        <div class="card">

            <div class="imgBox">
                <img src="https://www.nicepng.com/png/full/218-2186702_related-wallpapers-software-de-programacion-png.png" alt="mouse corsair" class="mouse" />
            </div>
            <div class="contentBox">
                <h3>Desbloquear Todos los cursos</h3>
                <h2 class="price">49.<small>50</small> €  <small> /Mes</small></h2>
                <NavLink to="/Pagar/2" class="buy">Buy Now</NavLink>
            </div>



        </div>
        <div class="card best">

            <div class="imgBox">
                <img src="https://sites.google.com/site/profeappinventor/_/rsrc/1511509657092/la-programacion-hoy-dia/leng4.png" alt="mouse corsair" class="mouse" />
            </div>
            <div class="contentBox">
                <h3>Desbloquear Todos los cursos</h3>
                <h2 class="price">40.<small>00</small> €  <small> /Anual</small></h2>
                <NavLink to="/Pagar/3" class="buy">Buy Now</NavLink>
            </div>



        </div>
    </div>
    </div>)
}
