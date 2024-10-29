// src/components/Tasks.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Tasks from './Tasks';

test('renders tasks component with add task button', () => {
    render(
        <Provider store={store}>
            <Tasks />
        </Provider>
    );

    expect(screen.getByText(/Tasks/i)).toBeInTheDocument();
    expect(screen.getByText(/Agregar Nuevo Task/i)).toBeInTheDocument();
});

test('opens modal on add task button click', () => {
    render(
        <Provider store={store}>
            <Tasks />
        </Provider>
    );

    fireEvent.click(screen.getByText(/Agregar Nuevo Task/i));
    expect(screen.getByText(/Agregar Task/i)).toBeInTheDocument();

});



test('adds new task to list', () => {
    render(
        <Provider store={store}>
            <Tasks />
        </Provider>
    );

    fireEvent.click(screen.getByText(/Agregar Nuevo Task/i));
    fireEvent.change(screen.getByPlaceholderText(/Descripción del Task/i), { target: { value: 'Test task' } });
    fireEvent.click(screen.getByText(/Crear/i));

    expect(screen.getByText(/Test task/i)).toBeInTheDocument();
});
