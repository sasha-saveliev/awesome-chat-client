import { Component, EventEmitter, Output } from '@angular/core';

import { SignUpFormModel } from './sign-up-form.model';

@Component({
  selector: 'ac-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {
  @Output() public submitted = new EventEmitter<SignUpFormModel>();

  public readonly signUpModel: SignUpFormModel = new SignUpFormModel();

  public onSubmit(): void {
    this.submitted.emit(this.signUpModel);
  }

  public signUp(): void {}
}
