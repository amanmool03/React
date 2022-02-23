import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper1",
    amount: 299,
    date: new Date(2020, 7, 14),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    // here depended on the previous state so instead of above use function

    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
