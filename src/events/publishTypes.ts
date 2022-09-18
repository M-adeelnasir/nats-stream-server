import { Subjects } from './subjects';
export interface TicketCreatedPub {
  subject: Subjects.ticketCreated;
  data: {
    name: string;
    maried: boolean;
    age: number;
  };
}
