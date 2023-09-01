import React from 'react';
import ToDo from "./ToDo";


//Remember: The goal is to create state objects
//When changed, React re-renders the component to browser
//React and UI updates depending on state

//parent component
const ToDoList = ({ toDos, setToDos, filteredToDos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredToDos.map((toDo) => (
                    <ToDo 
                        setToDos={setToDos} 
                        toDos={toDos}
                        text={toDo.text} 
                        toDo={toDo}
                        key={toDo.id}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;