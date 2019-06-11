import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'ac-sidebar-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarSettingsComponent {
  public fakeChannels = [
    {
      name: 'Загальний'
    },
    {
      name: 'Бухгалтерія'
    },
    {
      name: 'КН-42з'
    }
  ];
}
