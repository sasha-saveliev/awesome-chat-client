import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

import { Room, User } from '../../models';
import { getCurrentUserSelector, getRoomsSelector, getUsersSelector, State } from '../../state';
import { DirectMessageDialogComponent } from '../direct-message-dialog/direct-message-dialog.component';

@Component({
  selector: 'ac-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  public currentUser: User;
  public users: User[];
  public rooms: Room[];

  constructor(
    public readonly store: Store<State>,
    public readonly router: Router,
    public readonly cd: ChangeDetectorRef,
    public readonly dialog: MatDialog
    ) {}

  public ngOnInit(): void {
    this.store.pipe(select(getRoomsSelector), untilComponentDestroyed(this))
      .subscribe((rooms: Room[]) => {
        this.rooms = rooms;
        this.cd.detectChanges();
      });

    this.store.pipe(select(getCurrentUserSelector), untilComponentDestroyed(this))
      .subscribe((currentUser: User) => {
        this.currentUser = currentUser;
        this.cd.detectChanges();
      });

    this.store.pipe(select(getUsersSelector), untilComponentDestroyed(this))
      .subscribe((users: User[]) => {
        this.users = users;
        this.cd.detectChanges();
      });
  }

  public openDirectMessageDialog() {
    this.dialog.open(DirectMessageDialogComponent, {
      data: {
        rooms: this.rooms,
        users: this.users,
        currentUser: this.currentUser
      }
    });
  }

  public toRoom(roomId: number) {
    this.router.navigate(['/home', roomId]);
  }

  public ngOnDestroy(): void { }
}
