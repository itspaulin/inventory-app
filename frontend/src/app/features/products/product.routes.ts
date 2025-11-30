import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./feature/products-list/products-list').then((m) => m.ProductsList),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./feature/product-create/product-create').then((m) => m.ProductCreate),
  },
];
