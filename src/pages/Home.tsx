// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
            <h1 className="text-3xl font-semibold text-blue-500 mb-8">Task App</h1>
            <div className="flex space-x-4">
                <Link to="/tasks">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">
                        Tasks
                    </button>
                </Link>
                <Link to="/listado">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">
                        Listado
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
