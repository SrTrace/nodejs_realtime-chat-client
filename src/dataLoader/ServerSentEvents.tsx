import React from 'react';
import { Message } from '../types/message';

interface Props {
  onData: (data: Message[]) => void;
}

export const ServerSentEventsLoader: React.FC<Props> = () => {
  return <h1 className="title">Server Sent Events</h1>;
}
