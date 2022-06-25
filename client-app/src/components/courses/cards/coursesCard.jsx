// libraries
import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

// Redux actions
import { bookmarkCourse, unmarkfavorites } from "../../../../redux/actions";

// styles
import { ThemeProvider } from "styled-components";
import JSIcon from "../../../icons/javascript";
import darkTheme from "./coursesCardDark.module.css";
import lightTheme from "./coursesCardLight.module.css";

let style = darkTheme;

function CoursesCard({ courses }) {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = useSelector(store => store.theme);
  const isLogged  = useSelector(store => store.isLogged);


  const { user } = useSelector(store => store)


  const handleClick = (id, bolean ) => {
    if(bolean){ bookmarkCourse(user._id, id)(dispatch);return}
    unmarkfavorites(user._id, id)(dispatch)
  }

  //FUNCION PARA SABER SI EL CURSO ES UNO FAVORITO O NO
  const isFavorite = (id) => {
    for(const course of user.courses) {
      if(course.course && course.course._id === id && course.isFavorite === true) {
        return <AiFillHeart onClick={() => handleClick(id, false)}/>
      }
    }
    return (<AiOutlineHeart onClick={() => handleClick(id, true)}/>)
  }

  return (
    <div className={lightTheme.container2}>
      {courses.length===0? null: courses.map((course) => (
        <ThemeProvider
          key={course._id}
          theme={theme === "light" ? (style = lightTheme) : (style = darkTheme)}
        >
          <div className={style.containerCourse}>
            <div className={style.flexContainer}>
              <NavLink
                to={`/course/${course.titulo}`}
                className={style.courseName}
              >
                {course.titulo.toUpperCase()}
              </NavLink>
              <div className={style.courseStats}>
              
              {isLogged?
                  isFavorite(course._id)
                :
                  <AiOutlineHeart onClick={() => navigate("/login")}/>
              }
                <span>Rating: {course.calificacion/course.userVotes.length || 0}</span>
              </div>
              <div className={style.descripcion}>
                <span>Descripcion: {course.descripcion}</span>
              </div>
            </div>
            <div className={style.lenguaje}>
              <JSIcon lenguajes={course.lenguaje.toLowerCase()} />
            </div>
            <div></div>
          </div>
        </ThemeProvider>
      ))}
    </div>
  );
}

export default CoursesCard;
