import { Component, OnInit } from '@angular/core';
import { ASSETS } from "@core/const";
import { IBusinessDetails } from '@core/models';
import { ApiService } from '@core/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  readonly ASSETS = ASSETS;

  businessDetails!: IBusinessDetails;

  constructor(
    private _apiService: ApiService
  ) { }
  async ngOnInit() {
    this.businessDetails = await this._apiService.getBusinessDetails();
  }

}
