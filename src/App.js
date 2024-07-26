import React, { useState, useEffect } from "react";
import Expenses from "./Components/Expense/Expenses.js";
import NewExpense from "./Components/NewExpenses/NewExpense.js";

const DUMMY_EXPENSE = [
    // {
    //     id: 1,
    //     date: new Date("2003-05-08"), // use ISO format for better compatibility
    //     title: "Example",
    //     amount: 0
    // }
];

const sortExpensesByDate = (expens) => {
    return expens.sort((a, b) => new Date(a.date) - new Date(b.date));
};

const App = () => {
    const [expenses, setExpenses] = useState(() => {
        const storedExpenses = localStorage.getItem('expenses');
        if (storedExpenses) {
            const parsedExpenses = JSON.parse(storedExpenses);
            // console.log("this is parsedExpense",parsedExpenses);
            return sortExpensesByDate(parsedExpenses.map(expense => ({
                ...expense,
                date: new Date(expense.date)
            })));
        }
        return DUMMY_EXPENSE;
    });

    useEffect(() => {
        
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        const sortedExpenses = sortExpensesByDate(updatedExpense);
        setExpenses(sortedExpenses);
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>
    );
}

export default App;
