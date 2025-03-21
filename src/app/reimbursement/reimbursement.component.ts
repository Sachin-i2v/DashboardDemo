import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';

export interface ReimbursementItem {
  title: string;
  date: string;
  category: string;
  username: string;
  department: string;
  lastUpdate: string;
  status: string;
  amount: string;
}

@Component({
  selector: 'app-reimbursement',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule
  ],
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.scss']
})
export class ReimbursementComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['title', 'date', 'category', 'username', 'department', 'lastUpdate', 'status', 'amount', 'action'];
  dataSource = new MatTableDataSource<ReimbursementItem>();
  originalData: ReimbursementItem[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tabOptions = ['All', 'Awaiting Reimbursement', 'Reimbursed'];
  selectedTab = 'All';

  ngOnInit() {
    const reimbursementData: ReimbursementItem[] = [
      { title: 'Indoor game with internal team', date: '20/01/2020', category: 'Games', username: 'Suraj Pandey', department: 'Administration', lastUpdate: '23/02/2020', status: 'Screening', amount: '₹ 1,299' },
      { title: 'Client meeting at Ashoka Hotel', date: '19/07/2020', category: 'Hotel', username: 'Ramesh Sharma', department: 'Product', lastUpdate: '23/02/2020', status: 'Rejected', amount: '₹ 89,922' },
      { title: 'Office activity for the team', date: '15/05/2020', category: 'Entertainment', username: 'Kishore Kumar', department: 'Management', lastUpdate: '23/02/2020', status: 'Screening', amount: '₹ 4,956' },
      { title: 'Business meeting at his office', date: '04/06/2020', category: 'Car rent', username: 'Kanishka Kapoor', department: 'Marketing', lastUpdate: '08/02/2020', status: 'Approved', amount: '₹ 12,209' },
      { title: 'WordPress subscription', date: '23/03/2020', category: 'WordPress', username: 'Pappa Yadav', department: 'Administration', lastUpdate: '08/03/2020', status: 'Approved', amount: '₹ 54,812' },
      { title: 'Software License Renewal', date: '25/06/2021', category: 'Software', username: 'Neha Singh', department: 'Engineering', lastUpdate: '28/06/2021', status: 'Pending', amount: '₹ 22,500' },
      { title: 'Business Travel to Mumbai', date: '12/09/2021', category: 'Travel', username: 'Vikas Gupta', department: 'Finance', lastUpdate: '18/09/2021', status: 'Approved', amount: '₹ 48,700' },
      { title: 'Client Dinner at Oberoi', date: '30/01/2022', category: 'Hotel', username: 'Rahul Mehta', department: 'Product', lastUpdate: '05/02/2022', status: 'Rejected', amount: '₹ 12,850' }
    ];

    this.originalData = reimbursementData;
    this.dataSource.data = this.originalData;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    
    if (tab === 'All') {
      this.dataSource.data = this.originalData;
    } else if (tab === 'Awaiting Reimbursement') {
      this.dataSource.data = this.originalData.filter(item => item.status === 'Screening' || item.status === 'Pending');
    } else if (tab === 'Reimbursed') {
      this.dataSource.data = this.originalData.filter(item => item.status === 'Approved');
    }
  }
}
