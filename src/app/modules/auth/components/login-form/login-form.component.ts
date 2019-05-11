import { Component, EventEmitter, Output } from '@angular/core';

import { LoginFormModel } from './login-form.model';

@Component({
  selector: 'ac-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Output() public submitted = new EventEmitter<LoginFormModel>();
  @Output() public toSignUp = new EventEmitter<void>();

  public readonly loginModel: LoginFormModel = new LoginFormModel();

  public onSubmit(): void {
    this.submitted.emit(this.loginModel);
  }

  public signUp(): void {
    this.toSignUp.emit();
  }
}
