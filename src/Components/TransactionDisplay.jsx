import { ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyle = makeStyles({
    list:{
        marginTop:10,
        border :" 1px solid  #f6f6f6"
    }
})

const TransactionDisplay = ({transaction, deleteTransaction}) =>{
    const classes = useStyle();
    const color = transaction.amount >= 0 ? 'Green' : 'Red';
    const sign = transaction.amount >=0 ? '₹' : '-₹';
    const amount = sign + Math.abs(transaction.amount) ;



 return(
     <ListItem className={classes.list} style={{background: `${color}`, color:'#fff'}}>
     <ListItemIcon>
         <DeleteIcon onClick= {() => deleteTransaction(transaction.id)}/>
     </ListItemIcon>
         <ListItemText primary={transaction.text}/>
         <ListItemText primary={amount}/>

     </ListItem>
 )
}

export default TransactionDisplay;