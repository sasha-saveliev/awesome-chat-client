import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

import { User } from '../../models';
import { State } from '../../state';
import { getUsersSelector } from '../../state';

@Component({
  selector: 'ac-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  public users: User[];

  constructor(
    public readonly store: Store<State>,
    public readonly cd: ChangeDetectorRef
    ) {}

  public ngOnInit(): void {
    this.store.pipe(select(getUsersSelector), untilComponentDestroyed(this))
      .subscribe((users: User[]) => {
        this.users = users;
        this.cd.detectChanges();
      });
  }

  public ngOnDestroy(): void { }
}
