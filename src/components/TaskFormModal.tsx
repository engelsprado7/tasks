// src/components/TaskFormModal.tsx
import React, { useState } from 'react';

interface Props {
    onAddTask: (description: string) => void;
    onClose: () => void;
}

const TaskFormModal: React.FC<Props> = ({ onAddTask, onClose }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (description.trim()) {
            onAddTask(description);
            setDescription('');
        }
    };

    return (
        <div className="modal bg-white rounded-lg shadow-lg p-4 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Agregar Task</h3>
            <input
                className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripción del Task"
            />
            <div className="flex justify-end space-x-2">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={handleSubmit}
                >
                    Crear
                </button>
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default TaskFormModal;