import React, { useState,useEffect } from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>{

    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')
    const titleChangeHandler = (event)=>{
        
setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event)=>{
setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event)=>{
setEnteredDate(event.target.value);
    }

    const submitHandler = (event)=>{

        event.preventDefault();

       const expenseData = {
           date:new Date(enteredDate),
        title:enteredTitle,
        amount:enteredAmount
       }
       props.onSaveExpenseData(expenseData);
    //    console.log(expenseData);
       setEnteredTitle('')
       setEnteredAmount('')
       setEnteredDate('')
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' max='25' required onChange={titleChangeHandler} value={enteredTitle} autoFocus></input>
            </div>


            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' step="0.1" required onChange={amountChangeHandler} value={enteredAmount}></input>
            </div>


            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' required onChange={dateChangeHandler} value={enteredDate}></input>
            </div>
            </div>

            <div className='new-expense__action'>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    );
}

export default ExpenseForm;