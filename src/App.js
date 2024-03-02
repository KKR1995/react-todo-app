import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
        <div className="to-do-outer-container">
            <h1 className="heading">TO-DO APP</h1>
            <div>
                <input
                    className="custom-input-1"
                    type="text"
                    placeholder="New Task"
                    value={newTask}
                    onChange={(s) => setNewTask(s.target.value)}
                />
                <button className="btn_primary"  onClick={addTask}>Add Task</button>
            </div>
            <div className="content-box-outer">
                <div >
                    <ul className="content-box">
                        {tasks.map((task, index) => (
                            <li key={index} className="list-items">
                                {task}
                                <button className="link-primary" onClick={() => removeTask(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

