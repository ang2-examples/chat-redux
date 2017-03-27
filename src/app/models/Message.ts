
import { User } from './User';
import { Thread } from './Thread';

/**
 * Message represents one message being sent in a Thread
 */
export interface Message {
  id?: string;
  sentAt?: Date;
  isRead?: boolean;
  thread?: Thread;
  author: User;
  text: string;
}
