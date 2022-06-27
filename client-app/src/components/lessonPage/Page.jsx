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
  const [quiz, setquiz] = useState(props.quiz);

  const handleApproved = (apro) => {
    setApproved(apro);
  };
  const handleQuiz = (apro) => {
    setquiz(apro);
  };
  const { lesson, user, detail } = useSelector(state => state);
  // let inicial = []
  // if (lesson.titulo) {
  //   inicial = lesson.quiz.respuestas.map(e => false)
  // }
  // let [aprob, setAprob] = useState(false);
  // let [resp, setresp] = useState(inicial);

  if (!lesson.titulo) { return <></> }
  let next = lesson.num + 1

  function Revisar() {

    Aprobar(user._id, lesson._id, lesson.num, detail._id)(props.dispatch)
    props.setRefresh(true)
    setquiz(false)
    setApproved(false)

  }
  return (
    <div className={style.infoContainer}>
      <div className={style.volver}><NavLink to={`/course/${detail._id}`}>Back to course</NavLink> <NavLink to={`/home`}>Go home</NavLink></div>
      <div className={style.form}>
        <div className={style.info}>
          <h1 className={style.title}>{lesson.titulo}</h1>
          <hr />
          <p className={style.description}>{lesson.descripcion}</p>
          <div className={style.video}>
            <Vimeo video={lesson.video} responsive className={style.video} />
          </div>
        </div>
        {quiz ? <QuiztCart
          questions={lesson.quiz}
          handleApproved={handleApproved}
          approved={approved}
        /> : <button className={style.send} onClick={() => handleQuiz(true)}> Hacer quiz</button>}
        {approved && !lesson.last ?
          <NavLink  className={style.sendN} to={`/course/${detail._id}/${next}`}><button  className={style.sendb} onClick={() => Revisar()}>
            Siguiente leccion
          </button></NavLink> : null}
        {lesson.last ?
          <NavLink className={style.sendN} to={`/course/${detail._id}`}><button className={style.sendb}onClick={() => { }}>
            Terminar el Curso
          </button></NavLink> : null}
      </div>
    </div>
  )
}

