import { v4 as uuidv4 } from 'uuid';
//as = 알리아스

const localStorage = window.localStorage

export const addTodo = (text) => {
    alert("ADD TODO")

    const id = uuidv4()
    const obj = {id: id, text:text, complete:false}

    localStorage.setItem(id, JSON.stringify(obj))
}

export const modifyTodo = (id) => {
    const target = JSON.parse(localStorage.getItem(id))

    //target.complete != target.complete
    //삼항 연산자
    target.complete = target.complete ? false : true

    localStorage.setItem(id, JSON.stringify(target))
}

export const removeTodo = (id) => {

    localStorage.removeItem(id)
}

export const getList = () => {
    //alert("GET LIST")

    const keys = Object.keys(localStorage)

    console.log(keys)

    const arr = [];

    keys.forEach(key => {
        arr.push(JSON.parse(localStorage.getItem(key)))
    });

    return arr
}