import { useState } from 'react';
import './App.css';

function App() {
  let [todolist,setTodolist]=useState([])
  

  let saveToDoList =(event)=>{
    let toname = event.target.toname.value;
    if (toname.trim() === "") {
      alert("Please enter a task");
      return;
    }
    if(!todolist.includes(toname)){
      let finalDolist = [...todolist,toname]
      setTodolist(finalDolist);
      event.target.toname.value = "";


    }else{
      alert("This TO-DO Task already exists!")
    }

    event.preventDefault();
  }
  let list = todolist.map((value,index)=>{
  return(
    <ToDoListItems value={value} key={index}  indexNumer={index}
    todolist={todolist}
    setTodolist={setTodolist}
    
    />
  )
})
  return (
    <div className="App">
      <h1>To Do List</h1>
      <form onSubmit={saveToDoList}>
        <input type='text'name='toname'></input>
        <button>Save</button>
      </form>

      <div className='outerDiv'>
          <ul>
            {list}
        </ul>
      </div>
    </div>
  );
}
export default App;
function ToDoListItems({ value , indexNumer , todolist , setTodolist }) {

  let [status , setStatus]=useState(false)
  let deleteRow = ()=>{
    let finalData=todolist.filter((v,i)=>i!=indexNumer);
    setTodolist(finalData);
  }
  let checkstatus=()=>{
    setStatus(!status)
  }
  return (
    <li  className={(status)? 'completetodo': ''} onClick={checkstatus}>
      {indexNumer+1} { ' - '}{value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}


