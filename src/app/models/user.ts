export interface User {
  id?: number;
  login: string;
  email: string;
  token?: string;
  role: string;
  password?: string;
  role_name?: string;
}
