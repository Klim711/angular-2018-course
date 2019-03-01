import { User } from '../user.interface';

export class UserModel implements User {
  public id: number = 711;
  public fakeToken: string | null = String(new Date());
  public name: {first: string, last: string} = {
    first: 'admin',
    last: 'admin',
  };
  public login: string = 'admin';
  public password: string = 'admin';

  constructor(content: {
    id: number,
    fakeToken: string,
    name: {
      first: string,
      last: string,
    },
    login: string,
    password: string,
  }) {
    Object.assign(this, content);
  }
}
