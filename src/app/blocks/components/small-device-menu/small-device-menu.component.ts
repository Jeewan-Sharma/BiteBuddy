import { Component } from '@angular/core';

@Component({
  selector: 'app-small-device-menu',
  templateUrl: './small-device-menu.component.html',
  styleUrl: './small-device-menu.component.scss'
})
export class SmallDeviceMenuComponent {

  selectedTab: string = 'Home';

  selectTab(tab: string) {
    this.selectedTab = tab
    // if (tab === 'Home') {
    //   this._router.navigateByUrl('/restaurant')
    // }
  }

}
