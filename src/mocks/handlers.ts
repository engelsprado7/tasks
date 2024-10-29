// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://6172cfe5110a740017222e2b.mockapi.io/elements', () => {
    return (
      HttpResponse.json([
        { id: '1', name: 'Element 1', avatar: 'https://via.placeholder.com/40' },
        { id: '2', name: 'Element 2', avatar: 'https://via.placeholder.com/40' },
      ])
    );
  }),
];
