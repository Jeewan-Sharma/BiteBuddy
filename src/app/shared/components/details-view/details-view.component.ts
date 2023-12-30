import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFoods } from 'src/app/core/models/foods.moldel';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-view',
  standalone: true,
  imports: [CommonModule, InputNumberModule, FormsModule, ButtonModule],
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.scss'
})
export class DetailsViewComponent {
  @Input() value!: number;

  @Input() selectedProduct!: IFoods;

  @Output() closeClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  async addToCart(selectedProduct: IFoods) {
    // selectedProduct.quantityInCart = this.value;
    // const res = await this._restaurantService.addToCart(selectedProduct)
    // if (res) {
    //   this._messageService.add({ severity: 'success', summary: 'Added', detail: `${selectedProduct.item} added to Cart Successfully` });
    // } else {
    //   this._messageService.add({ severity: 'error', summary: 'Error!', detail: `${selectedProduct.item} not added to Cart` });
    // }
  }

  onCloseClick() {
    this.closeClicked.emit(false)
  }

}
