import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksRoutingModule } from './blocks-routing.module';

import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SmallDeviceMenuComponent } from './components/small-device-menu/small-device-menu.component';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    SmallDeviceMenuComponent
  ],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    ProgressSpinnerModule
  ]
})
export class BlocksModule { }
