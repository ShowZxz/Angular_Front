import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  public displayTicketArchived: boolean = false; //ajout de lattribut

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
  }

  ngOnInit() {
  }
  toggleDisplayTicketArchived() {
    this.displayTicketArchived = !this.displayTicketArchived;
  }

  //get filteredTicketList(): Ticket[] {
    //return this.displayTicketArchived ? this.ticketService.getArchivedTickets() : this.ticketList;
 // }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }

  
  deleteTicket(hasBeenDeleted: boolean) {
    console.log('event received from child:', hasBeenDeleted);
  }

}
