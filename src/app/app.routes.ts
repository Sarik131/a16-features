import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user-search',
    loadComponent: () =>
      import('./feature/user-search/user-search.component').then(
        (c) => c.UserSearchComponent
      ),
  },
  {
    path: 'user-detials/:username',
    loadComponent: () =>
      import('./feature/user-details/user-details.component').then(
        (c) => c.UserDetailsComponent
      ),
  },
  {
    path: '',
    redirectTo: 'user-search',
    pathMatch: 'full',
  },
];
