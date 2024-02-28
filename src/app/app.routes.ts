import { Routes } from '@angular/router';
import { PageVanillaComponent } from './page-vanilla/page-vanilla.component';
import { PageMaterialComponent } from './page-material/page-material.component';

export const routes: Routes = [
  {
    path: 'vanilla',
    loadComponent: () =>
      import('./page-vanilla/page-vanilla.component').then(
        (mod) => mod.PageVanillaComponent
      ),
  },
  {
    path: 'material',
    loadComponent: () =>
      import('./page-material/page-material.component').then(
        (mod) => mod.PageMaterialComponent
      ),
  },
];
