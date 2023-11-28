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
  
  get filteredTicketList(): Ticket[] {
    return this.displayTicketArchived ? this.ticketList.filter(ticket => ticket.archived) : this.ticketList;
  }
 

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    
    console.log('event received from child:', hasBeenSelected);
  }

  
  ticketHasBeenRemoved(ticket:Ticket){
    console.log('event REMOVE received from child:')
    this.ticketService.removeTicket(ticket);
  
  
 }
 ticketHasBeenArchived(ticket:Ticket){
  console.log('event Archived received from child:')
  this.ticketService.archiveTicket(ticket);
  
 }

 ticketHasBeenToggled(Toggled: boolean){
  
  console.log('event Toggled received from child:',Toggled)
 }
  

}
