
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) =>{
    return(
        <div>
    {props.filteredArr.length >0 && props.filteredArr.map((temps, id) => (
        <ExpenseItem 
        key={temps.id} 
        expenseDate={temps.date} 
        exenseTitle={temps.title} 
        expenseAmount={temps.amount} />
        ))}
        {!props.filteredArr.length && <h2 className='expenses-list__fallback'>No Expense Found</h2>}
        </div>
        )
        
}

export default ExpenseList;