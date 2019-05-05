import { Component, EventEmitter, Output } from '@angular/core';

import { SidebarSection } from '../../../models';

@Component({
  selector: 'ac-sidebar-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class SidebarFooterComponent {
  @Output() public activeSectionChanged = new EventEmitter<SidebarSection>();

  public readonly sections: SidebarSection[] = [{
    name: 'rooms',
    icon: 'message'
  }, {
    name: 'contacts',
    icon: 'contacts'
  }];

  public setActiveSection(section: SidebarSection): void {
    this.activeSectionChanged.emit(section);
  }
}
