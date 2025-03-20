import { MessageData, Event } from './types';
import { getEnvironmentVariables } from './config';

function generateRandomId(): string {
  const date = new Date();
  const dateHash = date.getTime().toString(16);
  const random = Math.random().toString(16).slice(2);
  return `${dateHash}-${random}`;
}

function identifySession(): string {
  const storedSession = localStorage.getItem('sessionId');
  const customIdRegex = /^[0-9a-f]+-[0-9a-f]+$/i;
  if (storedSession && customIdRegex.test(storedSession)) {
    return storedSession;
  }
  const newSession = generateRandomId();
  localStorage.setItem('sessionId', newSession);
  return newSession;
}

async function postMessage(data: MessageData) {
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

async function sendTrackingData(event: Event) {
  const sessionId = identifySession();
  sessionStorage.setItem('sessionId', sessionId);

  const urlParams = new URLSearchParams(window.location.search);
  const referralSource = urlParams.get('ref') || 'direct';
  const userAgent = navigator.userAgent;

  const body = {
    eventType: event.type,
    eventData: event.data,
    sessionId,
    referralSource,
    userAgent,
  };

  try {
    const response = await fetch(`${getEnvironmentVariables().API_URL}/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error('Response not OK');
    }
    return true;
  } catch (error) {
    console.error('Error in sendTrackingData:', error);
    return false;
  }
}

export { postMessage, sendTrackingData };
