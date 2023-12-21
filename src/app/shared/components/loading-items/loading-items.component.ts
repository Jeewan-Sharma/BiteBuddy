import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-loading-items',
  standalone: true,
  imports: [CommonModule, SkeletonModule],
  templateUrl: './loading-items.component.html',
  styleUrl: './loading-items.component.scss'
})
export class LoadingItemsComponent {

}
