import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, DeviceWidthService } from '@core/services';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {
  cartVisibility: boolean = false;
  constructor(
    protected _deviceWidthService: DeviceWidthService,
    protected _cartService: CartService,
    private _router: Router,
  ) { }

  async openCart() {
    await this._deviceWidthService.getScreenSize()
    this.cartVisibility = true
  }

  closeCart() {
    this.cartVisibility = false
  }

  proceedToCheckout() {
    this._router.navigateByUrl('/restaurant/checkout')
    this.closeCart();
  }
}
