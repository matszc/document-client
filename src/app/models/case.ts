export interface Case {
  comment: string;
  date: Date;
  description: string;
  documents: Array<Document>;
  status: string;
  title: string;
  type: string;
  user_email: string;
}
