import { Component } from '@angular/core';
import { SummaryComponent } from "../summary/summary.component";
import { TopSpendersComponent } from "../top-spenders/top-spenders.component";
import { WidgetsComponent } from "../widgets/widgets.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-dashboard',
  imports: [SummaryComponent, TopSpendersComponent, WidgetsComponent, ContactComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
