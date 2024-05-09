import { MessageData } from './types';
import { getEnvironmentVariables } from './config';

export async function postMessage(data: MessageData) {
  try {
    const response = await fetch(`${getEnvironmentVariables().API_URL}/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Response not OK');
    }
    return true;
  } catch (error) {
    console.error('Error in postMessage:', error);
    return false;
  }
}
