import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'signup',
  templateUrl: 'signup.html',
  styleUrls: ['signup.scss']
})
export class SignupComponent {
  private username: string = '';
  private password: string = '';

  constructor(private router: Router) {}

  signup(event: Event): void {
    event.preventDefault();
    console.log("New Username: ", this.username);
    console.log("New Password: ", this.password);
    this.router.navigate(['/home']);
  }
}
