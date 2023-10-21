import './Calender.css'


const Calender =  (props) => {

    const Month = props.expenseDate.toLocaleString('en-US', { month: 'long' });
    const day = props.expenseDate.toLocaleString('en-US', { day: '2-digit' });
    const year = props.expenseDate.getFullYear();
    return(
        <div className="expense-date">
            <div className="expense-date__month">{Month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
)
}

export default Calender;