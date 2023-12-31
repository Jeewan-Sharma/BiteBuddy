import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceWidthService } from '@core/services';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { IFoods } from 'src/app/core/models/foods.moldel';
import { DetailsViewComponent } from '@shared/components';

@Component({
  selector: 'app-listed-items',
  standalone: true,
  imports: [CommonModule, DialogModule, SidebarModule, InputNumberModule, ButtonModule, DetailsViewComponent, FormsModule],
  templateUrl: './listed-items.component.html',
  styleUrl: './listed-items.component.scss'
})
export class ListedItemsComponent {
  detailsVisibility: boolean = false;
  selectedProduct!: IFoods;
  cartQuantity: number = 1

  @Input() foods: any;

  constructor(protected _deviceWidthService: DeviceWidthService, private _messageService: MessageService) { }

  viewDetails(product: IFoods) {
    this.detailsVisibility = true;
    this.selectedProduct = product;
  }

  closeDetails(event: boolean) {
    this.detailsVisibility = event
  }

  async addToCart(selectedProduct: IFoods) {
    // selectedProduct.quantityInCart = this.value;
    // const res = await this._restaurantService.addToCart(selectedProduct)
    // if (res) {
    this._messageService.add({ severity: 'success', summary: 'Added', detail: `${selectedProduct.item} added to Cart Successfully` });
    // } else {
    //   this._messageService.add({ severity: 'error', summary: 'Error!', detail: `${selectedProduct.item} not added to Cart` });
    // }
  }

  hideSidebar() {
    this.cartQuantity = 1;
  }

}
