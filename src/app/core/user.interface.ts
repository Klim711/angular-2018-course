export interface User {
  id: number;
  fakeToken: string;
  name: {
    first: string,
    last: string,
  };
  login: string;
  password: string;
  // email: string;
  // password: string;
  // firstName: string;
  // lastName: string;
  // token: number | null;
}
