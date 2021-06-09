import { Button, Typography } from "@material-ui/core";


const Hello = ({name, fn}) => {
    
    
    
    return ( 
        <>
        <Typography component="h1" variant="h1">Hello {name}</Typography>
        <Button color="primary" onClick = {() => { fn(name) }}>CLICK</Button>
        </>
     );
}
 
export default Hello;