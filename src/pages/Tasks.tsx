// src/pages/Tasks.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addTask } from '../redux/tasksSlice';
import TaskFormModal from '../components/TaskFormModal';

const Tasks: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleAddTask = (description: string) => {
        dispatch(addTask(description));
        setShowModal(false);
    };

    return (
        <div>
            <h2>Tasks</h2>
            <button onClick={() => setShowModal(true)}>Agregar Nuevo Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.description}</li>
                ))}
            </ul>
            {showModal && <TaskFormModal onAddTask={handleAddTask} onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default Tasks;
