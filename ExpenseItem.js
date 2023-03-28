import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDetail from "./ExpenseDetail";

const ExpenseItem=(props)=> {
  const deleteExpense=() =>{
    const expenseItem = document.querySelector('.expense-item');
    expenseItem.parentNode.removeChild(expenseItem);
  }
   return (
          <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
              <h2>{props.title}</h2>
              <div className="expense-item__price">${props.amount}</div>
              <ExpenseDetail amount={props.amount} />
              <div className="expense-item__description">
                <h2>{props.locationOfExpenditure}</h2>
              </div>
            </div>
            <button onClick={deleteExpense}>Delete Expense</button>
          </Card>
        );
    
    
  
}

export default ExpenseItem;

