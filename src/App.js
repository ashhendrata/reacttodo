//imports
import React, {useState, useEffect} from 'react'; //also imports specifics from library
import './App.css';
//components
import Form from './ToDoListComponents/Form';
import ToDoList from './ToDoListComponents/ToDoList';


function App() {

  const [userInput, setUserInput] = useState(""); //state resets everytime we submit
  const [toDos, setToDos] = useState([]); //array of objects
  const [category, setCategory] = useState('all');
  const [filteredToDos, setFilteredToDos] = useState([]); //second array needed to preserve other values despite filter applied
  const [listName, setListName] = useState("");

  useEffect(() => {
    getLocalToDos();

    if (!listName) {
        const newListName = prompt("Please enter a name for your to-do list:");
        setListName(newListName || "My To-Do List"); // Set default if user doesn't input a name
    }
  }, []); //runs once when the page opens

  useEffect(() => {
    categoryHandler();
    saveToDos();
  }, [toDos, category]); //every time toDos and category states change, function will run

  //FUNCTIONS AND EVENTS
  const categoryHandler = () => {
    switch(category){
      case 'completed':
        setFilteredToDos(toDos.filter(toDo => toDo.completed === true));
        break;
      case 'uncompleted':
        setFilteredToDos(toDos.filter(toDo => toDo.completed === false));
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
};

  //Saves ToDos to local storage
  const saveToDos = () => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  };
  const getLocalToDos = () => {
    if (localStorage.getItem('toDos') === null){
    localStorage.setItem('toDos', JSON.stringify([])); //if no ToDos, empty array is added
    } else {
    let localToDo = JSON.parse(localStorage.getItem('toDos'));
    setToDos(localToDo);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>{listName}</h1>
      </header>
      
      <Form
        userInput={userInput}
        toDos={toDos} 
        setToDos={setToDos} 
        setUserInput={setUserInput}
        setCategory={setCategory}
        />
      <ToDoList 
        setToDos={setToDos} 
        toDos={toDos} 
        filteredToDos={filteredToDos}/>
    
    </div>
    
  );
}

export default App;
