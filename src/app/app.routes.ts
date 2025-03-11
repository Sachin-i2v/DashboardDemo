import { Routes } from '@angular/router';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [  // Ensure 'export' is here
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reimbursement', component: ReimbursementComponent },  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

];
