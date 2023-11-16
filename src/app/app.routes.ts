import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { MessageComponent } from './message/message.component';
import { OopsComponent } from './oops/oops.component';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes'),
  },
  {
    path: '',
    loadComponent: () => import('./home/home.component'),
    children: [
      {
        path: '',
        component: MessageComponent,
      },
    ],
  },
  {
    path: 'message',
    component: MessageComponent,
    canMatch: [authGuard],
  },
  {
    path: 'message',
    component: OopsComponent,
  },
  {
    path: 'message/:id',
    component: MessageComponent,
    data: {
      config: 'CONFIG',
    },
  },
];
