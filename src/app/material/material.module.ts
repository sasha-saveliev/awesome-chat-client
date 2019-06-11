import { NgModule } from '@angular/core';

import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatMenuModule
  ],
})
export class MaterialModule { }
