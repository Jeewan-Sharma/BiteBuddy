import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ASSETS, CONFIG } from '@core/const';
import { CartService, DeviceWidthService } from '@core/services';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MessageService } from 'primeng/api';
import { ICart } from '@core/models';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    InputNumberModule,
    FormsModule,
    DividerModule,
    DialogModule,
    ButtonModule,
    SidebarModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  readonly CONFIG = CONFIG;
  readonly ASSETS = ASSETS;

  @Output() closeClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  cartProducts: any;
  cartVisibility: boolean = true;
  subtotalNumber!: number;
  totalItems!: number;
  discount!: number;
  netPrice!: number;
  confirmVisibility: boolean = false
  selectedProduct!: ICart;

  constructor(
    protected _deviceWidthService: DeviceWidthService,
    private _cartService: CartService,
    protected _router: Router,
    private _messageService: MessageService,
  ) { }

  async ngOnInit() {
    await this.getData()
    await this.calculateSummaryValues()
  }

  async getData() {
    this.cartProducts = await this._cartService.getProductsFromCart()
  }

  calculateSummaryValues() {
    // calculate Total Number
    let total: number = 0;
    this.cartProducts.forEach((item: any) => {
      total += item.quantityInCart;
    });
    this.totalItems = total;

    // calculate total price
    let subTotal: number = 0;
    this.cartProducts.forEach((item: any) => {
      subTotal += item.quantityInCart * item.netPrice;
    });
    this.subtotalNumber = subTotal;

    //Calculate Discount
    this.discount = CONFIG.DISCOUNT_PERCENTAGE / 100 * this.subtotalNumber;

    // calculation of net price
    this.netPrice = this.subtotalNumber + (this.cartProducts?.length === 0 ? 0 : CONFIG.SHIPPING_FEE) - this.discount;
  }

  onCloseClick() {
    this.closeClicked.emit(false)
  }

  async valueChanged() {
    await this._cartService.changeProductsFromCart(this.cartProducts)
    await this.calculateSummaryValues()
  }

  openDeleteDialog(product: any) {
    this.selectedProduct = product
    this.confirmVisibility = true
  }

  proceedToCheckout() {
    this.onCloseClick();
    this._router.navigate(['', 'checkout'])
  }

  cancelDelete() {
    this.confirmVisibility = false
  }

  async confirmDelete() {
    const res = await this._cartService.removeProductFromCart(this.selectedProduct)
    if (res) {
      this._messageService.add({ severity: 'success', summary: 'Deleted', detail: `${this.selectedProduct?.food.item} Removed from Cart Successfully` });
    } else {
      this._messageService.add({ severity: 'error', summary: 'Error!', detail: `Error in removal of ${this.selectedProduct?.food.item}` });
    }
    await this.getData()
    await this.calculateSummaryValues()
    this.confirmVisibility = false
  }

}
