import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from './header/header.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent, SidebarComponent, HeaderComponent,ReimbursementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-dashboard';
}
