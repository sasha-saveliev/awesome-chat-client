import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

import { UsersService } from '../../../messenger/services';
import { SignUpFormModel } from '../../components/sign-up-form/sign-up-form.model';
import { AuthService } from '../../services';

@Component({
  selector: 'ac-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpRouteComponent {
  constructor(
    public readonly authService: AuthService,
    public readonly userService: UsersService,
    public readonly router: Router
    ) {}

  public signUp(signUpModel: SignUpFormModel): void {
    this.userService.create(signUpModel)
      .pipe(mergeMap(() => this.authService.authorize({ email: signUpModel.email, password: signUpModel.password })))
      .subscribe(() => this.router.navigate(['/home']));
  }
}
