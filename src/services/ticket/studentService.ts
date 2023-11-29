import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    //liens api
  private apiUrl = 'https://api.myjson.com/bins/ck44c'; 
  
  public students$: BehaviorSubject<Ticket[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    
    this.getStudents();
  }
  
getStudents() {
    this.http.get<Ticket[]>(this.apiUrl)
      .subscribe(
        (students) => {
          //Upadte du student
          this.students$.next(students);
        },
        (error) => {
          console.error('Erreur lors de la récupération des étudiants :', error);
        }
      );
  }
 
}