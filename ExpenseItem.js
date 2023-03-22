import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseItem(props) {
  console.log(props.expenses);

  return (
    <div>
      {props.expenses.map((expense) => {
        return (
          <div className="expense-item">
            <ExpenseDate date={expense.date} />
            <div className="expense-item__description">
              <h2>{expense.title}</h2>
              <div className="expense-item__price">${expense.amount}</div>
              <ExpenseDetail amount={expense.amount} />
              <div className="expense-item__description">
                <h2>{expense.locationOfExpenditure}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ExpenseItem;

