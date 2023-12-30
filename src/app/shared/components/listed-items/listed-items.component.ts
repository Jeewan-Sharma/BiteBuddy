import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceWidthService } from '@core/services';
import { DialogModule } from 'primeng/dialog';
import { IFoods } from 'src/app/core/models/foods.moldel';
import { DetailsViewComponent } from '@shared/components';

@Component({
  selector: 'app-listed-items',
  standalone: true,
  imports: [CommonModule, DialogModule, DetailsViewComponent],
  templateUrl: './listed-items.component.html',
  styleUrl: './listed-items.component.scss'
})
export class ListedItemsComponent {
  detailsVisibility: boolean = false;
  selectedProduct!: IFoods;
  cartQuantity: number = 1

  @Input() foods: any;

  constructor(protected _deviceWidthService: DeviceWidthService) { }

  viewDetails(product: IFoods) {
    this.detailsVisibility = true;
    this.selectedProduct = product;
  }

  closeDetails(event: boolean) {
    this.detailsVisibility = event
  }

}
