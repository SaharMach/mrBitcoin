import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  userService = inject(UserService)
  userName!: string;

  constructor(
    private router: Router
  ) {}

  onSaveContact() {
    this.userService.signup(this.userName)
    this.router.navigate(['/']);
  }
}
