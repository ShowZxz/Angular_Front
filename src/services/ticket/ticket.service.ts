import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;
  private archivedTickets: Ticket[] = [];
  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);
  public archivedTickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.archivedTickets);

  constructor() {
  }

  addTicket(ticket: Ticket) {
    this.ticketList.push(ticket);
    this.tickets$.next(this.ticketList);
    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  }
  deleteTicket(ticket: Ticket) {
      // Retirer le ticket de la liste principale
      const index = this.ticketList.findIndex(t => t === ticket);
      if (index !== -1) {
        const archivedTicket = this.ticketList.splice(index, 1)[0];
  
        // Ajouter le ticket archivé à la liste des tickets archivés
        this.archivedTickets.push(archivedTicket);
  
        // Mettre à jour la valeur de l'observable avec la nouvelle liste de tickets
        this.tickets$.next(this.ticketList);
  
        // Mettre à jour la valeur de l'observable des tickets archivés
        this.archivedTickets$.next(this.archivedTickets);
      }
  }
}
