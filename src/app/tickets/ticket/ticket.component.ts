import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  ticket: Ticket;

  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  ticketHasBeenRemoved: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  @Output()
  ticketHasBeenArchived: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  

  constructor() {
  }

  ngOnInit() {
  }

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }
  removeTicket() {
    console.log('Remove ticket button clicked');
    this.ticketHasBeenRemoved.emit(this.ticket);
  }
  archiveTicket(){
    console.log('Archived ticket button clicked');
    this.ticketHasBeenArchived.emit(this.ticket);
  }
}
