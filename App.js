import "./App.css";
import ExpenseItem from "./Component/ExpenseItem";
function App() {
  const expenses = [
    {
      title: "car Insurance",
      amount: 294,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "company",
    },
    {
      title: "Toilet Paper",
      amount: 300,
      date: new Date(2021, 5, 21),
      locationOfExpenditure: "shop",
    },
    {
      title: "Market",
      amount: 500,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Market",
    },
    {
      title: "Furniture",
      amount: 700,
      date: new Date(2021, 2, 30),
      locationOfExpenditure: "Shop",
    },
  ];
  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        locationOfExpenditure={expenses[0].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        locationOfExpenditure={expenses[1].locationOfExpenditure}
     > </ExpenseItem>

        <ExpenseItem expenses={expenses}/>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        locationOfExpenditure={expenses[2].locationOfExpenditure}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        locationOfExpenditure={expenses[3].locationOfExpenditure}
      ></ExpenseItem>

    </div>
  );
}
export default App;
