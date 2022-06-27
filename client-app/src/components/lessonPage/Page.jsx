// libraries
import { useState } from "react";
import Vimeo from "@u-wave/react-vimeo";
import { useSelector } from "react-redux";
import QuiztCart from "./quiztCart";
import { NavLink } from "react-router-dom";
// redux actions 
import { Aprobar } from "../../../redux/actions";
// style
import style from './lessonPage.module.css';

export default function Page(props) {
  const [approved, setApproved] = useState(false);
  const handleApproved = (apro) => {
    setApproved(apro);
  };
  const { lesson, user, detail } = useSelector(state => state);
  let next = lesson.num +1
  // let inicial = []
  // if (lesson.titulo) {
  //   inicial = lesson.quiz.respuestas.map(e => false)
  // }
  // let [aprob, setAprob] = useState(false);
  // let [resp, setresp] = useState(inicial);

  if (!lesson.titulo) { return <></> }

  // function Responder(e, index) {
  //   if(resp.length===0){setresp(inicial);return }
  //   let newarr = resp.map((ele, i) => { if (i === index) { return e.target.value } return e.target.value })
  //   console.log(newarr)
  //   setresp(newarr)
  // }
  function Revisar() {
  //   let comparativo = resp.map((e, i) => resp[i] === lesson.quiz.respuestas[0])
  //   comparativo = comparativo.filter(e => e !== false).length
  //   if (comparativo >= lesson.quiz.Resp_min_forAb) {
      Aprobar(user._id, lesson._id, lesson.num, detail._id)(props.dispatch)
  //     setAprob({ texto: "Felicidades!, acabas de aprobar la leccion, da click en siguiente para poder avanzar a la siguiente leccion", success: true })
  //   } else {
  //     setAprob({ texto: "Opps! Lamento imformarte que no has acertado el numero de preguntas necesario para Aprobar, pero no te rindas. Prueba volver a repetir la leccion para ver que te quedo mal y repetir el cuestionario" })
  //   }
  }
  return (
    <div className={style.infoContainer}>
      <div className={style.form}>
        <div className={style.info}>
          <h1 className={style.title}>{lesson.titulo}</h1>
          <hr />
          <p className={style.description}>{lesson.descripcion}</p>
          <div className={style.video}>
            <Vimeo video={lesson.video} responsive className={style.video} />
          </div>
        </div>
        {/* <div id="form" className={style.info} >
          {lesson.quiz ? lesson.quiz.preguntas.map((e, i) =>
            <div key={i} className={style.pregunta}>
              <h3>{e.texto.toUpperCase()}</h3>
              <hr className={style.separar} />
              <div className={style.opciones} >{e.respuestas.map((ele, index) => <div key={index} ><label className={style.input} onClick={(e) => { Responder(e, index) }}>{ele} <input type="radio" name={"pregunta" + i} value={ele} /></label></div>)}</div>
            </div>
          ) : null}
          {resp.filter(e => e).length >= lesson.quiz.Resp_min ? <button className={style.Revisar} onClick={() => Revisar()}>Revisar</button> : null}
        </div>
        {aprob ? <label className={aprob.success ? style.label : style.label1}>{aprob.texto}</label> : null} */}
         <QuiztCart
          questions={lesson.quiz}
          handleApproved={handleApproved}
          approved={approved}
        />
        {approved?
        <NavLink to="#"><button className={style.send} onClick={()=>Revisar()}>
          Siguiente leccion
        </button></NavLink>:null}
      </div>
    </div>
  )
}

