import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card.js';
import * as XLSX from 'xlsx';

const Expenses = (props) => {
  const handleDownload = () => {
    // Step 1: Retrieve the data from local storage
    const data = localStorage.getItem('expenses');
    if (!data) {
      console.error('No data found in local storage for the key "expenses"');
      return;
    }

    // Step 2: Parse the JSON data
    const expenses = JSON.parse(data);

    // Step 3: Convert the data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(expenses);

    // Step 4: Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Expenses');

    // Step 5: Write the workbook and trigger the download
    XLSX.writeFile(workbook, 'expenses.xlsx');
  };

  return (
    <Card className="expenses">

    
           <span>Add Expense by Filling Above Form</span>
        
      <div className='download-button'>
        <img 
        src={`${process.env.PUBLIC_URL}/download-minimalistic-svgrepo-com.svg`} 
        alt="Download Icon" 
        className="download-icon"
        onClick={handleDownload}
      />
      {/* <button onClick={}>Add</button> */}
      
      </div>
      
      

      
            
      {
        props.item.map(expense => (
          <ExpenseItem 
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))
      }
    </Card>
  );
};

export default Expenses;
