// libraries
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// redux actions 
import { getLesson, findCourse } from '../../../redux/actions';
import Page from './Page';
// style
import style from './lessonPage.module.css';


function LessonPage() {
  let { idLesson } = useParams();
  const dispatch = useDispatch();
  getLesson(idLesson)(dispatch)
  return (
    <div className={style.highContainer}>
      <Page dispatch={dispatch} findCourse={findCourse} />
    </div>
  )
}


export default LessonPage
