import { Major } from "./Major";

export interface Ticket {
  
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?: Major;
  archived?: boolean;
}

