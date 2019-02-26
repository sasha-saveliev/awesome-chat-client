import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

import { Room } from '../../../models';
import { getRoomsSelector, State } from '../../../state';

@Component({
  selector: 'ac-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomRouteComponent implements OnDestroy {
  public activeRoom: Room;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<State>,
    private readonly cd: ChangeDetectorRef
  ) {
    this.route.params.subscribe(({ roomId }) => this.setActiveRoom(Number(roomId)));
  }

  public setActiveRoom(roomId: number) {
    this.store.pipe(select(getRoomsSelector), untilComponentDestroyed(this))
      .subscribe((rooms: Room[]) => {
      this.activeRoom = rooms.find(room => room.id === roomId);
      this.cd.detectChanges();
    });
  }

  public ngOnDestroy(): void { }
}
