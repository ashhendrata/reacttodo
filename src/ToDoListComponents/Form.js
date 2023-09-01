import React from 'react';

function Form({setUserInput, toDos, setToDos, userInput, setCategory}){
    const userInputHandler = (e) => {
        console.log(e.target.value);
        setUserInput(e.target.value);
    };
    const enterToDoHandler = (e) => {
        e.preventDefault(); //Page otherwise will refresh and delete entries
        setToDos([
            ...toDos, {text: userInput, completed: false, id: Math.random() * 1000}
        ]);
        setUserInput(""); //resets input state after submit
    };
    const categoryHandler = (e) => {
        setCategory(e.target.value);
    }

    return(
        <form>
                <div className="input-container">
                    <input value={userInput} onChange={userInputHandler} maxLength={40} type="text" className="todo-input" />
                    <button onClick={enterToDoHandler} className="todo-button" type="submit">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <div className="select">
                    <select onChange={categoryHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Done</option>
                    <option value="uncompleted">Incomplete</option>
                    </select>
                </div>
        </form>
    );
};

export default Form;