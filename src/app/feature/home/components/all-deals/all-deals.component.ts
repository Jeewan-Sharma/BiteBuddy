import { Component, OnInit } from '@angular/core';
import { EPageState } from '@core/enums';
import { ApiService } from '@core/services';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-all-deals',
  templateUrl: './all-deals.component.html',
  styleUrl: './all-deals.component.scss'
})
export class AllDealsComponent implements OnInit {

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
