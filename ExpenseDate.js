import "./ExpenseDate.css";

const ExpenseDate=(props)=>{

  if (!props.date) {
    return ; // or any other value or component you'd like to render if date is not available
}
    const month=props.date.toLocaleString('en-US',{month: 'long'});
const day=props.date.toLocaleString('en-US',{day :'2-digit'});
const year=props.date.getFullYear();

    return(
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
      </div>
    );
}
export default ExpenseDate; 