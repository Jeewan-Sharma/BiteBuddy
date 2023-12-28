import { Component, OnInit } from '@angular/core';
import { EPageState } from '@core/enums';
import { ApiService } from '@core/services';
import { BehaviorSubject } from 'rxjs'
import { IFoods } from 'src/app/core/models/foods.moldel';

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

  todaysSpecial!: IFoods[];

  constructor(
    private _apiService: ApiService
  ) { }

  async ngOnInit() {
    await this.getData()
  }

  getData() {
    this.pageState$.next(this.ePageState.LOADING);
    setTimeout(async () => {
      this.todaysSpecial = await this._apiService.getTodaysSpecial();
      this.pageState$.next(this.ePageState.SUCCESS);
    }, 3000);
  }

}
