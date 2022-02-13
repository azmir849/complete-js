import StudentInfoDate  from './StudentInfoDate'
import './StudentInfo.css'

function StudentInfo (props){

    return (
        <div className='student-info'>
            <StudentInfoDate date = {props.date} />
            <div className='student-info__description'>
                <h2>{props.name}</h2>
                <div className='student-info__roll'>{props.roll}</div>
            </div>
        </div>
    )
}

export default StudentInfo