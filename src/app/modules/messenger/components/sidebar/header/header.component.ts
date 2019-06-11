import { Component, Input } from '@angular/core';

import { User } from '../../../models';

@Component({
  selector: 'ac-sidebar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class SidebarHeaderComponent {
  @Input() public readonly currentUser: User;
}
