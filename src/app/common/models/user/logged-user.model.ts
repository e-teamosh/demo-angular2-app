export class WfLoggedUser {
  constructor(private userName: string = '') {
  }

  setUserName(userName: string): void {
    this.userName = userName;
  }

  getUserName(): string {
    return this.userName;
  }

  clear(): void {
    this.setUserName('');
  }

  fillFromObject(loggedUser: WfLoggedUser): void {
    Object.assign(this, loggedUser);
  }
}
