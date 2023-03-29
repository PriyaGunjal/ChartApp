import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import Expenses from "./Expenses";

const ExpenseItem=(props)=> {
 const [title,setTitle]= useState(props.title);
  
 
  const clickHandler=()=>{
   setTitle('updated!')
    console.log(title);
  };
  
   return (
          <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
              <h2>{title}</h2>
              <div className="expense-item__price">${props.amount}</div>
              <Expenses amount={props.amount} />
              <div className="expense-item__description">
                <h2>{props.locationOfExpenditure}</h2>
              </div>
            </div>
            <button onClick={clickHandler}>change title</button>
          </Card>
        );
    
    
  
}

export default ExpenseItem;

