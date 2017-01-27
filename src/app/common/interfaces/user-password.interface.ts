export interface UserPassword {
  password: string;
  setPassword(password: string): void;
  getPassword(): string;
}
