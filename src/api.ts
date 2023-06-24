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

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  } else {
    throw new Error(responseData.status.messages.join(' '));
  }
}
