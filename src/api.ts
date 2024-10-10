import axios from 'axios';
import { Message } from './types/message';

axios.defaults.baseURL = 'http://localhost:3000';

export async function getMessages() {
  const res = await axios.get('/messages');

  return res.data as Message[];
}

export function sendMessage(text: string) {
  return axios.post('/messages', { text });
}
