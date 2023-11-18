export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?: Major;
  archived?: boolean;
}
export enum Major{
  COMPUTER_SCIENCE = 'Computer Science',
  ELECTRICAL_ENGINEERING = 'Electrical Engineering',
  MECHANICAL_ENGINEERING = 'Mechanical Engineering',
}
