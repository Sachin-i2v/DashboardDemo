import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-violators',
  templateUrl: './top-violators.component.html',
  styleUrls: ['./top-violators.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TopViolatorsComponent {
  violators = [
    { name: 'Rohit Sharma', role: 'Nursing Assistant', amount: 27637, expenses: 8 },
    { name: 'Bhargavi Mehta', role: 'President of Sales', amount: 4956, expenses: 6 },
    { name: 'Divya Shah', role: 'Medical Assistant', amount: 3470, expenses: 3 },
    { name: 'Khrubasankar Rajveer', role: 'Project Manager', amount: 2063, expenses: 2 },
  ];
  
  viewAll() {
    // Implement view all functionality
    console.log('View all clicked');
  }
}