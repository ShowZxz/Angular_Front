import { Ticket } from '../models/ticket';
import { Major } from "src/models/Major";

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    // Titre modifié
    
    title: 'London',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: Major.ELECTRICAL_ENGINEERING,
    archived: true,
  },
  {
    
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: Major.COMPUTER_SCIENCE,
    archived: false,
  },
  {
    title: 'Tokyo',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Java',
    major: Major.COMPUTER_SCIENCE,
    archived: false,
  }
];
