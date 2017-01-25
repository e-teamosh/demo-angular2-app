import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss']
})
export class LoginComponent {
  private username: string = '';
  private password: string = '';

  constructor(private router: Router) {}

  login(event: Event): void {
    event.preventDefault();
    console.log("Username: ", this.username);
    console.log("Password: ", this.password);
    this.router.navigate(['/home']);
  }
}
