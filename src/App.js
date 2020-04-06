import React, { PureComponent, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import ColorBox from './component/colorBox';
import TodoList from './component/todoList'

class ColorBox123 extends PureComponent{
  constructor(props){
    super(props);

    this.state={
      shape: 'square',
      color: 'deeppink',
    };
    this.handleBoxClick = this.handleBoxClick.bind(this);
  }
  handleBoxClick(){
    this.setState({color: 'green'});
  };
  render(){
    const {color} = this.state;
    return (
      <div 
        className="color-box"
        style={{backgroundColor: color}}
        onClick={this.handleBoxClick}
      ></div>
    )
  }
}

function ColorBoxHook() {
  const [shape, setShape]=useState('square');
  const [color, setColor]=useState('deeppink');
  function handleBoxClick(){
    setColor('green');
  }
  return (
    <div 
      className="color-box"
      style={{backgroundColor: color, width: 200, height: 200}}
      onClick={handleBoxClick}
      >
    </div>
  );
}

function TodoList123(){
  const [todoList, setTodoList] = useState(['love', 'easy', 'frontend']);
  function removeTodo(index){
    //Remember to clone into a new array
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return(
    <ul className="todo-list">
      {todoList.map((todo, index)=>(
        <li
          key={index}
          onClick={()=>removeTodo(index)}
        >
          {todo}
        </li>
      ))}
    </ul>
  )
}
// function example1(){
//   const [person, setPerson] = useState({ name: 'Hau', color: 'red'});
//   setPerson({ ...person, color: 'green'})
// }
function App(){
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Noras is so handsome here !'},
    { id: 2, title: 'My brother is Hau, he is so kind !'},
    { id: 3, title: 'He teach me a lot of knowleage'}
  ])
  function handleTodoClick(todo){
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);//x là từng phần tử của todoList
    if(index<0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return(
    <div className="app">
      <h1>React hooks - TodoList</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  )
}


export default App;
