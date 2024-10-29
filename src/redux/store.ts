// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root', // Clave en localStorage
  storage, // Usa localStorage para persistir los datos
};

const persistedReducer = persistReducer(persistConfig, tasksReducer);

export const store = configureStore({
  reducer: {
    tasks: persistedReducer,
  },
});

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



