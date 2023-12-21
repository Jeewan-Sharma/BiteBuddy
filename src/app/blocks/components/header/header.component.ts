import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ASSETS } from "@core/const";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly ASSETS = ASSETS;
  constructor(protected _router: Router) { }
}
