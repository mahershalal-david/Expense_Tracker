import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from '../NewExpense/ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) =>{
    const [selectedYear,setSelected] = useState('')
    const mainYearChangeCatcher = (selectedYear) => {
        setSelected(selectedYear)
        console.log(selectedYear);
    }
    var filtered = [];
    if (selectedYear){
        filtered = props.items.filter(e => e.date.getFullYear().toString() === selectedYear);
    }
    else{
        filtered = props.items;
    }
    
    return(
        <Card className="expenses">
            <ExpensesFilter yearChangeCatcher = {mainYearChangeCatcher}/>
            <ExpensesChart expense={filtered} />
            <ExpenseList filteredArr = {filtered} />
           
        </Card>
    )
}

export default Expenses;