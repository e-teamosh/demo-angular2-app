export class WfUser {
  constructor(private userName: string = '',
              private password: string = '') {
  }

  setUserName(userName: string): void {
    this.userName = userName;
  }

  getUserName(): string {
    return this.userName;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getPassword(): string {
    return this.password;
  }

  fillFromObject(user: WfUser): void {
    Object.assign(this, user);
  }
}
