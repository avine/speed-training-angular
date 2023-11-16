import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SecretComponent } from './secret/secret.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'secret',
    component: SecretComponent,
  },
];

export default routes;
