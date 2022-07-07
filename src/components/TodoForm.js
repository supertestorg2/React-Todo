import React from 'react';

const TodoForm = ({onSearch, onInputChange, onSubmit, onClear, onClearAll, addValue}) => {
    return (
        <form>
            <input className="todo-input todo-search" onChange={onSearch} type="search" name="todo-search" placeholder="Search..." autoComplete="off" />
            <input className="todo-input" onChange={onInputChange} type="text" name="todo" placeholder="Add..." autoComplete="off" value={addValue} />
            <br />
            <button onClick={onSubmit} className="btn">Add Todo</button>
            <button onClick={onClear} className="btn" >Clear Completed</button>
            <button onClick={onClearAll} className="btn">Clear All</button>
        </form>
    );
};

export default TodoForm;