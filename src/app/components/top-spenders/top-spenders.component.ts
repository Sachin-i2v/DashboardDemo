import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-spenders',
  templateUrl: './top-spenders.component.html',
  styleUrls: ['./top-spenders.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TopSpendersComponent {
  users = [
    { name: 'Karan poor', role: 'Medical Assistant', amount: 99122 },
    { name: 'Rupa Chandrasekar', role: 'Medical Assistant', amount: 89922 },
    { name: 'Aarush Mishra', role: 'Marketing Coordinator', amount: 72873 },
    { name: 'Aarav Saxena', role: 'Web Designer', amount: 62970 },
    { name: 'Somesh Nanda', role: 'Medical Assistant', amount: 54812 },
    { name: 'Rohit Sharma', role: 'Nursing Assistant', amount: 27637 },
    { name: 'Bhargavi Mehta', role: 'President of Sales', amount: 4956 },
    { name: 'Divya Shah', role: 'Medical Assistant', amount: 3470 },
  ];
}