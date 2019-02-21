import { Component, EventEmitter, Output } from '@angular/core';

import { LoginFormModel } from './login-form.model';

@Component({
  selector: 'ac-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Output() public submitted = new EventEmitter<LoginFormModel>();

  public readonly loginModel: LoginFormModel = new LoginFormModel();

  public onSubmit() {
    this.submitted.emit(this.loginModel);
  }
}
