import React from "react";
import ExpenseForm from "./ExpesneForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseForm={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
