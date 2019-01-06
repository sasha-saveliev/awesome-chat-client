import { Component } from '@angular/core';

import { AppConfig } from '../environments/environment';
import { ElectronService } from './providers/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public readonly electronService: ElectronService) {
    console.warn('AppConfig', AppConfig);
    if (electronService.isElectron()) {
      console.warn('Mode electron');
      console.warn('Electron ipcRenderer', electronService.ipcRenderer);
      console.warn('NodeJS childProcess', electronService.childProcess);
    } else {
      console.warn('Mode web');
    }
  }
}
