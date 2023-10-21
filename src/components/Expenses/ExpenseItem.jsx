import './ExpenseItem.css';
import Calender from './Calender'
import Card from '../UI/Card'

function ExpenseItem(props) {

    return (
        <Card className='expense-item'>
            <Calender expenseDate={props.expenseDate}/>
            <div className='expense-item__description'>
                <h2>{props.exenseTitle}</h2>
                <div className='expense-item__price'>${props.expenseAmount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;