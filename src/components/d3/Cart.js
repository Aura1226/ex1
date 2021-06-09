import { Button, Grid } from "@material-ui/core";


const Cart = ({items, changeQty}) => {
 
    let total = 0;

    const list = items.map(orderItem => {

        total += orderItem.product.price * orderItem.qty; 
    
        return (
            <Grid container key={orderItem.product.pno} >
                <Grid item xs ={6}>
                <h4>{orderItem.product.name}</h4>
                <h5>{orderItem.qty}</h5>
                </Grid>
                <Grid item xs = {6}>
                    <Button variant="contained" color="primary" onClick={() => changeQty(orderItem.product.pno, 1)}>+</Button>
                    <Button variant="contained" color="secondary" onClick={() => changeQty(orderItem.product.pno, -1)}>-</Button>
                </Grid>
            
            </Grid>
        )
    })


    return (  
        <>
        <h3>CART</h3>
        {list}
        TOTAL: {total}
        </>
    );
}
 
export default Cart;