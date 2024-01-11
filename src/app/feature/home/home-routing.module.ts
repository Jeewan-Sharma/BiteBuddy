import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRootComponent } from './components/home-root/home-root.component';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeRootComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
