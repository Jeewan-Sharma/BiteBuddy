import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeRootComponent } from './components/home-root/home-root.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { TodaysSpecialComponent } from './components/todays-special/todays-special.component';
import { AllDealsComponent } from './components/all-deals/all-deals.component';

import { SkeletonModule } from 'primeng/skeleton';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { LoadingItemsComponent } from '@shared/components';

@NgModule({
  declarations: [
    HomeRootComponent,
    HomeComponent,
    BannerComponent,
    TodaysSpecialComponent,
    AllDealsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SkeletonModule,
    DividerModule,
    ButtonModule,
    LoadingItemsComponent
  ]
})
export class HomeModule { }
