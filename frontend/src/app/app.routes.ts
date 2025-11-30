import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/feature/products-list/products-list').then((m) => m.ProductsList),
  },
  {
    path: 'stock',
    loadComponent: () =>
      import('./features/stock/feature/stock-dashboard/stock-dashboard').then(
        (m) => m.StockDashboard
      ),
  },
];
