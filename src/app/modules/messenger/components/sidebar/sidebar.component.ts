import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

import { Room, User } from '../../models';
import { getCurrentUserSelector, getRoomsSelector, State } from '../../state';

@Component({
  selector: 'ac-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  public currentUser: User;
  public rooms: Room[];

  constructor(
    public readonly store: Store<State>,
    public readonly router: Router,
    public readonly cd: ChangeDetectorRef
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
  }

  public getRoomName(room: Room): string {
    return room.participants.find(participant => participant.id !== this.currentUser.id).username;
  }

  public toRoom(roomId: number) {
    this.router.navigate(['/home', roomId]);
  }

  public ngOnDestroy(): void { }
}
