
import { useState } from 'react';
import { expenses } from '../src/expense'
import Expenses from "./components/Expenses/Expenses"
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [tempExpense,addExpense] = useState(expenses)
  const expenseCatcher = (finalCatchData) =>{
    console.log(finalCatchData);
    addExpense(preState => { return [finalCatchData,...preState]})
  }
  return (
    <div>
  <NewExpense onCatchHandler={expenseCatcher}/>
  <Expenses items={tempExpense} />
    </div>
  )}
export default App;
