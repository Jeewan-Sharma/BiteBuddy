import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeRootComponent } from './components/home-root/home-root.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { TodaysSpecialComponent } from './components/todays-special/todays-special.component';
import { AllDealsComponent } from './components/all-deals/all-deals.component';

import { SkeletonModule } from 'primeng/skeleton';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';

import { ListedItemsComponent, LoadingItemsComponent } from '@shared/components';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    HomeRootComponent,
    HomeComponent,
    BannerComponent,
    TodaysSpecialComponent,
    AllDealsComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SkeletonModule,
    DividerModule,
    ButtonModule,
    DialogModule,
    TabViewModule,
    PanelModule,
    SidebarModule,
    CalendarModule,
    InputTextareaModule,
    InputTextModule,
    InputMaskModule,
    LoadingItemsComponent,
    ListedItemsComponent,
  ]
})
export class HomeModule { }
