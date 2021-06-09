import { useState } from "react";
import ExLayout from "../d2/ExLayout";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";



const TodoContainer = () => {

    const [refresh, setRefresh] = useState(false)

    const change = () => {
        setRefresh(!refresh)//기본 값이 false니까 !(not) 해주면 true
        
    }

    return ( 
        <ExLayout>
            <TodoHeader change = {change}></TodoHeader>
            <TodoList change = {change}></TodoList>
        </ExLayout>
     );
}
 
export default TodoContainer;