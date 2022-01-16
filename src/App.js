import { useState } from 'react';
import './App.css';
import { Typography, makeStyles, Box } from '@material-ui/core';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransactions from './Components/NewTransactions';
import Transaction from './Components/Transaction';
import TransactionDisplay from './Components/TransactionDisplay';

const useStyle = makeStyles({
  header: {
    color: 'white',
    fontSize: 35,
    margin: '20px 0',
    textTransform: 'uppercase',
    fontFamily: 'Playfair Display, serif'

  },
  component: {
    background: '#fff',
    width: 800,
    padding: 10,
    borderRadius: 20,
    display:"flex",
    '& > *':{
      width:"50%",
      padding:10,
      height:"70vh"
      
    }

  }
})

function App() {
  const classes = useStyle();

  const [transaction, setTransation] =useState([
    {id: 1, text:'Momos',amount:-20},
    {id: 2, text:'Salary',amount:2000},
    {id: 3, text:'Book',amount:-200},
    {id: 4, text:'Bouns',amount:1500},
  ]);

  const deleteTransaction  = (id) =>{
    setTransation(transaction.filter(transation => transation.id !==id));
  }
  const addTransaction =(transaction) => {
    console.log(transaction);
    setTransation(TransactionDisplay =>[transaction, ...TransactionDisplay]);
  }

  return (
    <div className="App">
      <Typography className={classes.header}>
        Expense Tracker
      </Typography>

      <Box className={classes.component}>
        <Box>
          <Balance transaction={transaction}/>
          <ExpenseCard transaction={transaction} />
          <NewTransactions addTransaction={addTransaction}/>
        </Box>
        <Box>
          <Transaction transaction={transaction} deleteTransaction={deleteTransaction}/>
        </Box>
      </Box>


    </div>
  );
}

export default App;
