import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ASSETS, CONFIG } from '@core/const';
import { ICart } from '@core/models';
import { CartService, DeviceWidthService } from '@core/services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  readonly CONFIG = CONFIG;
  readonly ASSETS = ASSETS;

  activeIndex: number = 0;
  selectedMethod: string = "Dine In";
  cartProducts!: ICart[];
  subtotalNumber!: number;
  totalItems!: number;
  discount!: number;
  netPrice!: number;
  disablePaymentTab: boolean = true;
  today: Date = new Date;
  responseVisibility: boolean = false;

  // forms
  personalDetailForm!: FormGroup;
  deliveryForm!: FormGroup;
  paymentDetailForm!: FormGroup;
  specialInstructionForm!: FormGroup;

  constructor(
    protected _deviceWidthService: DeviceWidthService,
    protected _cartService: CartService,
    protected _router: Router,
  ) {

  }

  async ngOnInit() {
    await this.initForm();
    await this.getData();
    await this.calculateSummaryValues();
  }

  async getData() {
    await this._cartService.getProductsFromCart()
    await this._cartService.cartProducts.subscribe(
      (products) => {
        this.cartProducts = products;
      }
    )
  }

  initForm() {
    this.personalDetailForm = new FormGroup({
      firstName: new FormControl<string | null>(null, [Validators.required]),
      lastName: new FormControl<string | null>(null, [Validators.required]),
      email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
      phone: new FormControl<string | null>(null, [Validators.required]),

    });
    this.deliveryForm = new FormGroup({
      streetAddress: new FormControl<string | null>(null, [Validators.required]),
      city: new FormControl<string | null>(null, [Validators.required]),
      state: new FormControl<string | null>(null, [Validators.required]),
      zipCode: new FormControl<number | null>(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(3)]),
    });
    this.paymentDetailForm = new FormGroup({
      cardNumber: new FormControl<number | null>(null, [Validators.required]),
      expiryDate: new FormControl<Date | null>(null, [Validators.required]),
      cvc: new FormControl<number | null>(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(3)]),
    });

    this.specialInstructionForm = new FormGroup({
      specialInstruction: new FormControl<number | null>(null),
    });
  }


  async selectMethod(method: string) {
    this.selectedMethod = method;
    await this.calculateSummaryValues();
  }

  async calculateSummaryValues() {
    // calculate Total Number
    let total: number = 0;
    this.cartProducts?.forEach((item: ICart) => {
      total += item.quantityInCart;
    });
    this.totalItems = total;

    // calculate total price
    let subTotal: number = 0;

    this.cartProducts?.forEach((item: ICart) => {
      if (item.food.netPrice) {
        subTotal += item.quantityInCart * item.food.netPrice;
      }
    });
    this.subtotalNumber = subTotal;

    //Calculate Discount
    this.discount = CONFIG.DISCOUNT_PERCENTAGE / 100 * this.subtotalNumber;

    // calculation of net price
    this.netPrice = this.subtotalNumber + (this.selectedMethod !== 'Delivery' || this.cartProducts.length == 0 ? 0 : CONFIG.SHIPPING_FEE) - this.discount;
  }

  get allCalculatedValues() {
    this.calculateSummaryValues();
    return {
      totalItems: this.totalItems,
      subtotal: this.subtotalNumber,
      discount: this.discount,
      netPrice: this.netPrice
    }
  }

  proceedToPayment() {
    if (this.personalDetailForm.invalid || (this.selectedMethod === 'Delivery' && this.deliveryForm.invalid)) {
      this.personalDetailForm.markAllAsTouched();
      this.deliveryForm.markAllAsTouched();
      return
    }
    this.activeIndex = 1
    this.disablePaymentTab = false
  }

  submit() {
    if (this.paymentDetailForm.invalid) {
      this.paymentDetailForm.markAllAsTouched();
      return
    }
    console.log('Submitted')
    this.responseVisibility = true
  }

}
