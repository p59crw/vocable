export class User {

    public id: string;
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public email: string;

  public constructor(username: string, password: string, email: string) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  getUsername(): string {
      return this.username;
  }

  getEmail(): string {
      return this.email;
  }

  getID(): string {
      return this.id;
  }
}
