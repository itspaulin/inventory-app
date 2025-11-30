import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/product.routes').then((m) => m.PRODUCT_ROUTES),
  },
  {
    path: 'stock',
    loadComponent: () =>
      import('./features/stock/feature/stock-dashboard/stock-dashboard').then(
        (m) => m.StockDashboard
      ),
  },
];
