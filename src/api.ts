import { MessageData } from './types';
import config from './config';

export async function postMessage(data: MessageData) {
  const response = await fetch(`${config.apiBaseUrl}/message`, {
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
