import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../models';
import { UsersService } from '../../services';
import { AddUsersAction, State } from '../../state';

@Component({
  selector: 'ac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeRouteComponent {
  constructor(
    public readonly usersService: UsersService,
    public readonly store: Store<State>
  ) {
    this.usersService.fetchAll()
      .subscribe((users: User[]) => this.store.dispatch(new AddUsersAction(users)));
  }
}
