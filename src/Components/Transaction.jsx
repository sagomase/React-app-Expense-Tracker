import { Typography, Box, Divider, makeStyles, List } from "@material-ui/core";
import TransactionDisplay from "./TransactionDisplay";

const useStyle = makeStyles({
    component: {
        '& > *': {
            marginBottom: 10
        }
    }
})


const Transaction = ({ transaction, deleteTransaction }) => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            <Typography variant='h5'>Transaction History</Typography>
            <Divider />
            <List>
                {
                    transaction.map(transaction => {
                        return <TransactionDisplay key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>
                    })
                }
            </List>
        </Box>
    )
}
export default Transaction;