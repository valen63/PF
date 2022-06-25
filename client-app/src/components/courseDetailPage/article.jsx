// libraries
import { useState } from "react";
import { useSelector } from "react-redux";

// hardDate
import { CursoBase } from "./CurssoBase";
import Stars from "./Vote/Vote";

// styles
import { ThemeProvider } from "styled-components";
import darkTheme from "./course/courseDark.module.css";
import lightTheme from "./course/courseLight.module.css";
import LessonSumary from "./course/lessonSumary/lessonSumary";

export default function CardD(props) {
  let { detail, user } = useSelector(state => state)
  let Curso = detail;
  let claseSumary = user.courses ? user.courses.find((o) => o.course && o.course._id === detail._id) : [];
  let style = darkTheme;

  if(!detail.titulo){return <div></div>}
  return (
    <ThemeProvider
      theme={
        props.theme === "light" ? (style = lightTheme) : (style = darkTheme)
      }
    >
      <div className={style.flexContainer}>
        <div className={style.Container}>
          <div className={style.flexContainer2}>
            <h1 className={style.titulo}>{Curso.titulo.toUpperCase()}</h1>
            <div className={style.data}>
              <label className={style.label}>
                Clasificacion: {Curso.votes.length>0?(Curso.votes.reduce((a, b) => a + b, 0)/Curso.userVotes.length).toFixed(1) : 0}
              </label>
              <label className={style.label}>
                Usuarios Inscriptos: {Curso.userInscript}
              </label>
              <Stars idCurso={detail._id} idUser={user._id} calificacion={detail.calificacion} />
            </div>
            <img className={style.imagen} alt="" src={Curso.imagen} />
          </div>
          <div className={style.flexContainer3}>
            <div className={style.containerDescrip}>
              <h3>Descripcion</h3>
              <p>{Curso.descripcion}</p>
            </div>
            {/* {claseSumary.length === 0 ? "boton" : <div className={style.flexContainer4}>
              <div className={style.flexContainer5}>
                <div className={style.progreso}>
                  <div className={style.input}>
                    {claseSumary.lessons.length===0 ? null: claseSumary.lessons.map((e) => (
                      <div className={style.ClasP}>
                        {e.isCompleted ? (
                          <input
                            key={e.id}
                            checked
                            type="radio"
                            readOnly
                            onClick={() => setIdClase(e.id)}
                          />
                        ) : e.isLocked ? (
                          <input
                            key={e.id}
                            type="radio"
                            disabled
                            onClick={() => setIdClase(e.id)}
                          />
                        ) : (
                          <input
                            key={e.id}
                            type="radio"
                            checked={false}
                            onClick={() => setIdClase(e.id)}
                            className={style.locked}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={style.lessonSumary}>
                  <LessonSumary clase={claseSumary} /> 
                </div>
              </div>
            </div>} */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
