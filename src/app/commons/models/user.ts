export class User {
  private userName: string;
  private password: string;

  constructor(userName: string, password: string) {
    this.setUserName(userName);
    this.setPassword(password);
  }

  public setUserName(userName: string): void {
    this.userName = userName;
  }

  public getUserName(): string {
    return this.userName;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public getPassword(): string {
    return this.password;
  }
}
