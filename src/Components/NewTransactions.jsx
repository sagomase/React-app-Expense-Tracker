import { useState } from 'react';
import { Box, Typography, TextField, makeStyles } from '@material-ui/core';


const useStyle = makeStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        '& > *':{
            marginTop:30
        }
    },
    button:{
        background:'#445A6f',
        color:'#fff',
        padding: 10
    }
})

const NewTransactions = ({addTransaction}) => {
    const classes= useStyle();
    const [text, setText] = useState('');
    const [amount, setAmount] = useState ();

    const NewTransactions = () =>{
        const transaction ={
            id: Math.floor(Math.random() * 10000),
            text: text,
            amount: +amount
        }
        addTransaction(transaction);
    }
 return(
<Box className={classes.container}>
    <Typography variant='h5'>New Transaction</Typography>
    <TextField label="Enter Expense" onChange={(e) =>setText(e.target.value)}/>
    <TextField label="Total Amount" onChange={(e) =>setAmount(e.target.value)}/>
    <button className={classes.button} onClick={NewTransactions} variant='contained'>Add New Transaction</button>
</Box>
 )
}
export default NewTransactions