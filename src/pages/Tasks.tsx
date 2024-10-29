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
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Tasks</h2>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4"
                onClick={() => setShowModal(true)}
            >
                Agregar Nuevo Task
            </button>
            <ul className="list-disc pl-5 mb-4">
                {tasks.map(task => (
                    <li key={task.id} className="mb-2">{task.description}</li>
                ))}
            </ul>
            {showModal && <TaskFormModal onAddTask={handleAddTask} onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default Tasks;