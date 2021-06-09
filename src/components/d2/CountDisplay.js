import { Typography } from "@material-ui/core";


const CountDisplay = ({num}) => {
    return ( 
        <Typography component="h2" variant="h2">COUNT: {num}</Typography>
     );
}
 
export default CountDisplay;