import './StudentInfoDate.css'
function StudentInfoDate(props){

    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const year = props.date.getFullYear()

    return(
        <div className='student-date'>
        <div className='student-date__day'>{day}</div>
        <div className='student-date__month'>{month}</div>
        <div className='student-date__year'>{year}</div>
        </div>
    )

}

export default StudentInfoDate