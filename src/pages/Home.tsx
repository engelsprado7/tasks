// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Pantalla Principal</h1>
            <button onClick={() => navigate('/tasks')}>Ir a Tasks</button>
            <button onClick={() => navigate('/listado')}>Ir a Listado</button>
        </div>
    );
};

export default Home;
