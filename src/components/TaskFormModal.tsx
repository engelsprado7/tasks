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
        <div className="modal">
            <h3>Agregar Task</h3>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripción del Task"
            />
            <button onClick={handleSubmit}>Agregar</button>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default TaskFormModal;
