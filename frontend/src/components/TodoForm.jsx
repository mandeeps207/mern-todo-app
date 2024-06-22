import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://mern-todo-app-qaxh.onrender.com/todos', { title, completed: false })
            .then(res => {
                addTodo(res.data);
                setTitle('');
            })
            .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;