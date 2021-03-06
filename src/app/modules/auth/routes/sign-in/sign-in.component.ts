
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginFormModel } from '../../components/login-form/login-form.model';
import { AuthService } from '../../services';

@Component({
  selector: 'ac-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInRouteComponent {
  constructor(
    public readonly authService: AuthService,
    public readonly router: Router
    ) {}

  public signUp(loginModel: LoginFormModel): void {
    this.authService.authorize(loginModel)
      .subscribe(() => this.router.navigate(['/home']));
  }

  public redirectToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }
}
