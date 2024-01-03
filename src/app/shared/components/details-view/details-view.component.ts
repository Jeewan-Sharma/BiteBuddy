import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFoods } from '@core/models';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CartService } from '@core/services';

@Component({
  selector: 'app-details-view',
  standalone: true,
  imports: [CommonModule, InputNumberModule, FormsModule, ButtonModule],
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.scss',
})
export class DetailsViewComponent {
  @Input() selectedProduct!: IFoods;

  @Output() closeClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  cartQuantity: number = 1

  constructor(private _messageService: MessageService, private _cartService: CartService) { }

  async addToCart(selectedProduct: IFoods, quantityToAdd: number) {
    const res = await this._cartService.addToCart(selectedProduct, quantityToAdd)
    if (res) {
      this._messageService.add({ severity: 'success', summary: 'Added', detail: `${selectedProduct.item} added to Cart Successfully` });
    } else {
      this._messageService.add({ severity: 'error', summary: 'Error!', detail: `${selectedProduct.item} not added to Cart` });
    }
  }

  onCloseClick() {
    this.closeClicked.emit(false)
  }

}
