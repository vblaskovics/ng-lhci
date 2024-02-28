import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-page-material',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './page-material.component.html',
  styleUrl: './page-material.component.scss',
})
export class PageMaterialComponent {
  items = new Array(1000);

  onClick() {
    console.log('test button clicked');
  }
}
