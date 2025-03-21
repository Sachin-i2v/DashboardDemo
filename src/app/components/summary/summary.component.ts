import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SummaryItem {
  type: 'expenses' | 'advances' | 'reimbursements';
  title: string;
  amount: number;
  iconBg: string;
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SummaryComponent {
  summaryItems: SummaryItem[] = [
    { 
      type: 'expenses', 
      title: 'Total Expenses', 
      amount: 452328, 
      iconBg: '#FFF0E6' 
    },
    { 
      type: 'advances', 
      title: 'Total Advances', 
      amount: 129698, 
      iconBg: '#FFE9EC' 
    },
    { 
      type: 'reimbursements', 
      title: 'Total Reimbursements', 
      amount: 232510, 
      iconBg: '#E8F3FF' 
    }
  ];
  
  viewAnalytics() {
    // Implement view analytics functionality
    console.log('View analytics clicked');
  }
}