import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-spenders',
  templateUrl: './top-spenders.component.html',
  styleUrls: ['./top-spenders.component.scss'],
  imports: [CommonModule]
})
export class TopSpendersComponent {
  users = [
    { name: 'Karan Kapoor', amount: 99122 },
    { name: 'Rupa Chandrasekar', amount: 89922 },
    { name: 'Aarush Mishra', amount: 72873 },
  ];
}
