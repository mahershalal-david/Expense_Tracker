import { useState } from 'react';
import '../NewExpense/ExpenseForm.css';

const ExpenseForm = (prop) => {

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    

    const expenseChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const formData = {
            'title' : enteredTitle,
            'amount' : +enteredAmount,
            'date' : new Date(enteredDate)
        }
        prop.onSaveExpenseData(formData);
        // console.log(formData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const cancelClick = () =>{
        prop.cancelcall()
    }
   
    return (
        <div>
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Enter Expenses</label>
                    <input type='text' placeholder='Enter Expenses' value={enteredTitle} onChange={expenseChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Enter Date</label>
                    <input type='Date' placeholder='Enter' min='2019-01-01' value={enteredDate} max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Enter Amount</label>
                    <input type='Number' min='0.01' step='0.01' value={enteredAmount} placeholder='Enter Amount in $' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button onClick={cancelClick}>Cancel</button>
                </div>
                <div className='new-expense__actions'>
                    <button>Add Expenses</button>
                </div>
            </div>
        </form>
        </div>
        
    )
}

export default ExpenseForm;