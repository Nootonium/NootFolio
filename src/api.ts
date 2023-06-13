import { MessageData } from './types';

export async function postMessage(data: MessageData) {
  const response = await fetch('http://localhost:3000/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
