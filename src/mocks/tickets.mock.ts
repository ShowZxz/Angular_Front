import { Major, Ticket } from '../models/ticket';

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
];
