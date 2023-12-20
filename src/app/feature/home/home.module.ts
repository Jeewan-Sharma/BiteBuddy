import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeRootComponent } from './components/home-root/home-root.component';
import { HomeComponent } from './components/home/home.component';

import { SkeletonModule } from 'primeng/skeleton';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    HomeRootComponent,
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SkeletonModule
  ]
})
export class HomeModule { }
