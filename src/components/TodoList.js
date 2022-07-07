import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onItemClick}) => {
    return (
        <div>
            <div className="titleHolder">Retro Todo List</div>
            <div className="todo-items">
                {todos.map(item => {
                    return (
                        <Todo key={item.id} unique={item.id} name={item.task} onClick={onItemClick} />
                    );
                })}
            </div>
        </div>
    );
};

export default TodoList;