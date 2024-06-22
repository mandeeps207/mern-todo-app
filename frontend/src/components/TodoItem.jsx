import React from 'react';
import axios from 'axios';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const toggleComplete = () => {
        axios.patch(`https://mern-todo-app-qaxh.onrender.com/todos/${todo._id}`, {
            completed: !todo.completed
        })
            .then(res => updateTodo(res.data))
            .catch(err => console.error(err));
    };

    const handleDelete = () => {
        axios.delete(`https://mern-todo-app-qaxh.onrender.com/todos/${todo._id}`)
            .then(() => deleteTodo(todo._id))
            .catch(err => console.error(err));
    };

    return (
        <li>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
            </span>
            <button onClick={toggleComplete}>
                {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TodoItem;