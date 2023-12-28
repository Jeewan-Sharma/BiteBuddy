import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceWidthService } from '@core/services';
import { IFoods } from 'src/app/core/models/foods.moldel';

@Component({
  selector: 'app-listed-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listed-items.component.html',
  styleUrl: './listed-items.component.scss'
})
export class ListedItemsComponent {

  @Input() foods: any;

  constructor(protected _deviceWidthService: DeviceWidthService) { }

}
