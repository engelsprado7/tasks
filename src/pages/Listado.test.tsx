// src/components/Listado.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Listado from './Listado';

describe('Listado Component', () => {
    beforeEach(() => {
        // Mock de la respuesta de `fetch`
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue([
                { id: '1', name: 'Element 1', avatar: 'https://via.placeholder.com/40' },
                { id: '2', name: 'Element 2', avatar: 'https://via.placeholder.com/40' },
            ]),
        } as unknown as Response);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('muestra mensaje de loading inicialmente', () => {
        render(<Listado />);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    // test('renderiza la lista de elementos después de cargar los datos', async () => {
    //     render(<Listado />);

    //     // Espera hasta que los elementos se rendericen en el DOM
    //     await waitFor(() => {
    //         expect(screen.getByText(/Element 1/i)).toBeInTheDocument();
    //         expect(screen.getByText(/Element 2/i)).toBeInTheDocument();
    //     });
    // });
});
