// src/redux/localStorage.ts

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasksState');
    if (serializedState === null) {
      return undefined; // Si no hay datos en localStorage, retorna `undefined` para inicializar el estado por defecto
    }
    return JSON.parse(serializedState); // Parsea y retorna el estado desde localStorage
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasksState', serializedState); // Guarda el estado serializado en localStorage
  } catch (err) {
    console.error("Could not save state", err);
  }
};
