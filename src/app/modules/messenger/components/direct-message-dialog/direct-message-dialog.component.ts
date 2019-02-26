import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { DirectMessageDialogDataModel } from '../../models/direct-message-dialog-data.model';
import { RoomService } from '../../services';
import { AddRoomAction, SetActiveRoomAction, State } from '../../state';

@Component({
  selector: 'ac-direct-message-dialog',
  templateUrl: './direct-message-dialog.component.html',
  styleUrls: ['./direct-message-dialog.component.scss']
})
export class DirectMessageDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly dialogData: DirectMessageDialogDataModel,
    public readonly dialogRef: MatDialogRef<DirectMessageDialogComponent>,
    public readonly roomService: RoomService,
    public readonly store: Store<State>,
    public readonly router: Router
    ) { }

  public createRoom(userId: number) {
    const { currentUser, rooms } = this.dialogData;
    const existingRoom = rooms.find(room => room.participants.some(participant => participant.id === userId));

    if (!existingRoom) {
      return this.roomService.createRoom([userId, currentUser.id])
        .subscribe(room => {
          this.store.dispatch(new AddRoomAction(room));
          this.store.dispatch(new SetActiveRoomAction(room));

          this.dialogRef.close();
          this.router.navigate(['home', room.id]);
        });
    }

    this.dialogRef.close();

    return this.router.navigate(['home', existingRoom.id]);
  }
}
