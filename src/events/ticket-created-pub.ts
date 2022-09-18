import { Subjects } from './subjects';
import { Publisher } from './base-publisher';
import { TicketCreatedPub } from './publishTypes';

export class TickerCreatedPublisher extends Publisher<TicketCreatedPub> {
  subject: Subjects.ticketCreated = Subjects.ticketCreated;
}
