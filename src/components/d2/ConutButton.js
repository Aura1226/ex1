import { Button } from "@material-ui/core"


const CountButton = ({fn}) => {
    return ( 
        <div>
            <Button onClick={() => fn(1)}>PLUS</Button>
            <Button onClick={() => fn(-1)}>MINUS</Button>
        </div>
     );
}
 
export default CountButton;