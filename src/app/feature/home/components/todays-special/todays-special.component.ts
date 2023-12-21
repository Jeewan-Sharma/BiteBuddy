import { Component, OnInit } from '@angular/core';
import { EPageState } from '@core/enums';
import { ApiService } from '@core/services';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-todays-special',
  templateUrl: './todays-special.component.html',
  styleUrl: './todays-special.component.scss'
})
export class TodaysSpecialComponent implements OnInit {

  //page states
  readonly ePageState = EPageState;
  protected pageState$ = new BehaviorSubject<EPageState>(
    this.ePageState.DEFAULT
  );

  constructor(
    private _apiService: ApiService
  ) { }

  async ngOnInit() {
    await this.getData()
  }

  getData() {
    this.pageState$.next(this.ePageState.LOADING);
  }

}
