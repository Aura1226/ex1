import { Paper } from "@material-ui/core";
import { useState } from "react";
import CountButton from "./ConutButton";
import CountDisplay from "./CountDisplay";
import OddEvenDisplay from "./OddEvenDisplay";


const CountContainer = () => {
    
    const [num, setNum] = useState(0)

    const changeNum = (value) => {
        console.log("click", value)
        setNum(num + value)
    }

    return ( 
        <Paper elevation={5}>
            <CountDisplay num={num}></CountDisplay>
            <OddEvenDisplay num={num}></OddEvenDisplay>
            <CountButton fn={changeNum}></CountButton>
        </Paper>
     );
}
 
export default CountContainer;