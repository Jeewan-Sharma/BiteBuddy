import { Component, OnInit } from '@angular/core';
import { EPageState } from '@core/enums';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '@core/services';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {

  //page states
  readonly ePageState = EPageState;
  protected pageState$ = new BehaviorSubject<EPageState>(
    this.ePageState.DEFAULT
  );

  constructor(private _loaderService: LoaderService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.pageState$.next(this.ePageState.LOADING);
    this._loaderService.showLoader();

  }

}
