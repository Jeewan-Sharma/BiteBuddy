import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  businessDetails = {
    name: 'Bite Buddy',
    description: 'A Symphony of Tastes, Where Every Bite Tells a Story.',
    facebookLink: 'https://facebook.com',
    appStoreLink: 'https://appstore.com',
    googlePlayLink: 'https://google.com',
    streetAddress: '30-32 Fifth Avenue, Black Town',
    city: 'Sydney',
    state: 'New South Wales',
    zipCode: '2148',
    storePhoneNumber: '0420817538',
    businessEmail: 'sjeewan53@gmail.com',
    openTime: '10:00 am',
    closeTime: '05:00 pm'
  }
}
