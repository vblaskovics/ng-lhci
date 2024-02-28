import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-vanilla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-vanilla.component.html',
  styleUrl: './page-vanilla.component.scss',
})
export class PageVanillaComponent {
  items = new Array(1000);

  onClick() {
    console.log('test button clicked');
  }
}
