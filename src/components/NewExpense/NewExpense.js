import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
  const [formOn,setformOn] = useState(0);
  const saveExpenseHandler = (expenseData) =>{
    const expenseObject = {
      ...expenseData,
      id : Math.random().toString()
    };
    props.onCatchHandler(expenseObject);
    // console.log(expenseObject);
    setformOn(0)
  };
  const cancelClick = () =>{
    setformOn(0)
}
const showForm = () =>{
  setformOn(1)
}

    return(
        <div className='new-expense'>
          {formOn ?
          <ExpenseForm onSaveExpenseData={saveExpenseHandler} cancelcall={cancelClick}/>
:<div>
  <button onClick={showForm}>Add Expense</button></div>}
        </div>
    )
}

export default NewExpense;