import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {

  const[newItem,setNewItem] = useState("");
  const [items, setItems] = useState([]);


  function addItem(){
    if(!newItem) {
      alert("Enter an item")
      return;
    }


    const item = {
      id: Math.floor(Math.random () * 1000),
      value: newItem
    };
    setItems(oldList => [...oldList, items]);
    setNewItem("")


  }
  
  return (
    <div className="App">
     
     <h1>Todo List App</h1>

     <input type="text" 
     placeholder='Add an item...' 
     value={newItem}
     onChange={e => setNewItem(e.target.value)}>

     </input>
     <button onClick={() => addItem()} >Add</button>

    
     <ul>
      {items.map(item => {
        return
        <li key={item.id}>{item.value}</li>
      })}
     </ul>
    </div>
  );
}

export default App;
