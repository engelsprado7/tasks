// src/pages/Listado.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Element {
    id: string;
    name: string;
    avatar: string;
}

const Listado: React.FC = () => {
    const [elements, setElements] = useState<Element[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://6172cfe5110a740017222e2b.mockapi.io/elements')
            .then((response) => {
                setElements(response.data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Listado</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {elements.map(element => (
                        <li key={element.id}>
                            <img src={element.avatar} alt={element.name} width={40} height={40} />
                            {element.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Listado;
