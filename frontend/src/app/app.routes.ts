import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/produtos/feature/produtos-list/produtos-list').then((m) => m.ProdutosList),
  },
  {
    path: 'stock',
    loadComponent: () =>
      import('./features/estoque/feature/estoque-dashboard/estoque-dashboard').then(
        (m) => m.EstoqueDashboard
      ),
  },
];
