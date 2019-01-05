export class User {

  public email: string;
  public password: string;

  public constructor(password: string, email: string) {
    this.password = password;
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }
}
