import logo from './logo.svg';
import './App.css';
import Hello from './components/d1/Hello';
import ChildEx from './components/d1/ChildEx';
import ProductDisplay from './components/d1/ProductDisplay';
import Kiosk from './components/d3/Kiosk';
import InputEx from './components/d2/Input';
import CountContainer from './components/d2/CountContainer';
import ExLayout from './components/d2/ExLayout';
import TodoContainer from './components/d4/TodoContainer';

function App() {

  const product = {
    pno:1,
    name: 'Apple',
    price: 3000
  }

const clickHandler = (value) => {
  alert("SUBJECT: " + value)
}

  return (
    <TodoContainer></TodoContainer>
  );
}

export default App;
