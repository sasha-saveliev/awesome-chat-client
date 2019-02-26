import { NgModule } from '@angular/core';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
  ],
})
export class MaterialModule { }
