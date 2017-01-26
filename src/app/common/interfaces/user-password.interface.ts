export interface UserPassword {
  password: string;
  confirmPassword?: string;
  setPassword(password: string): void;
  getPassword(): string;
  setConfirmPassword?(confirmPassword: string): void;
  getConfirmPassword?(): string;
}
