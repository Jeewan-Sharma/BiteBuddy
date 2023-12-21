import { Component, OnInit } from '@angular/core';
import { EPageState } from '@core/enums';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '@core/services';
import { ApiService } from '@core/services';
import { IBusinessDetails } from '@core/models';
import { ASSETS } from '@core/const';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
  readonly ASSETS = ASSETS;

  //page states
  readonly ePageState = EPageState;
  protected pageState$ = new BehaviorSubject<EPageState>(
    this.ePageState.DEFAULT
  );

  businessDetails!: IBusinessDetails;
  isBusinessOpen!: Boolean;

  constructor(
    private _loaderService: LoaderService,
    private _apiService: ApiService
  ) { }

  async ngOnInit() {
    await this.getData();
    this.checkIsBusinessOpen();
  }

  async getData() {
    this.pageState$.next(this.ePageState.LOADING);
    this._loaderService.showLoader();
    this.businessDetails = await this._apiService.getBusinessDetails();
    this._loaderService.hideLoader()
    this.pageState$.next(this.ePageState.SUCCESS);
    console.log(this.businessDetails)
  }

  async checkIsBusinessOpen() {
    const timeNow = new Date()
    const openTime = await this.changeStringToTime(this.businessDetails.openTime)
    const closeTime = await this.changeStringToTime(this.businessDetails.closeTime)

    if (timeNow >= openTime && timeNow <= closeTime) {
      this.isBusinessOpen = true
    } else {
      this.isBusinessOpen = false
    }
  }

  changeStringToTime(time: string): Date {
    const newDate = new Date()
    const inputtedTimeParts = time?.match(/(\d+):(\d+)\s+(AM|PM)/i);
    if (inputtedTimeParts) {
      let hours = parseInt(inputtedTimeParts[1], 10);
      let minutes = parseInt(inputtedTimeParts[2], 10);
      let period = inputtedTimeParts[3].toLowerCase();

      // Adjust hours for PM time
      if (period === 'pm' && hours !== 12) {
        hours += 12;
      }
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      newDate.setSeconds(0)
    }
    return newDate
  }
}
