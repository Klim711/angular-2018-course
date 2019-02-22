import { User } from '../user.interface';

export class UserModel implements User {
  public email: string = 'admin@example.com';
  public password: string;
  public firstName: string = 'Admin';
  public lastName: string = 'Admin';
  public token: number | null = null;

  constructor(content: {
    email: string,
    password: string,
    firstName?: string,
    lastName?: string,
    token?: number,
  }) {
    Object.assign(this, content);
  }
}
