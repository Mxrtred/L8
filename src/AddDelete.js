import React, { useState } from 'react';

function AddDelete() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        setTasks([...tasks, task]);
        setTask('');
    };

    const removeTask = index => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <input value={task} onChange={e => setTask(e.target.value)} />
            <button onClick={addTask}>Добавить</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => removeTask(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddDelete;