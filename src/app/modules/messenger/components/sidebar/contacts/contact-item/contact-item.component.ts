import { Component, Input } from '@angular/core';

import { User } from '../../../../models';

@Component({
  selector: 'ac-sidebar-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class SidebarContactItemComponent {
  @Input() public user: User;
}
