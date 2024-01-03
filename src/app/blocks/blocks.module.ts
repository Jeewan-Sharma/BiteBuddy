import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksRoutingModule } from './blocks-routing.module';

import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SmallDeviceMenuComponent } from './components/small-device-menu/small-device-menu.component';
import { CartComponent } from '../shared/components/cart/cart.component';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    SmallDeviceMenuComponent,
  ],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    ProgressSpinnerModule,
    ToastModule,
    MessagesModule,
    CartComponent,
    DialogModule,
    SidebarModule,
    ButtonModule
  ]
})
export class BlocksModule { }
