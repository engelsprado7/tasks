// src/pages/Listado.tsx
import React, { useEffect, useState } from 'react';

interface Element {
    id: string;
    name: string;
    avatar: string;
}

const Listado: React.FC = () => {
    const [elements, setElements] = useState<Element[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setElements(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al cargar los elementos:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Listado</h2>
            {loading ? (
                <p className="text-gray-500">Loading...</p>
            ) : (
                <ul className="list-disc pl-5">
                    {elements.map(element => (
                        <li key={element.id} className="flex items-center mb-2">
                            <img className="rounded-full mr-3" src={element.avatar} alt={element.name} width={40} height={40} />
                            <span>{element.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Listado;