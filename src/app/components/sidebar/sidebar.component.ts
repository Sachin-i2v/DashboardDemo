import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; // Added
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  Router, RouterOutlet } from '@angular/router';

export interface SidebarMenuItem {
  id: string;
  icon: string;
  label: string;
  active: boolean;
  hasNotification?: boolean;
  notificationCount?: number;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule, // Added
    CommonModule,
    MatFormFieldModule,
    RouterOutlet
    
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'], // Fixed the incorrect property name
})
export class SidebarComponent implements OnInit {
  @Input() menuItems: SidebarMenuItem[] = [];
  @Input() activeItemId: string = '';
  @Input() collapsed: boolean = false;
  @Input() userRole: string = 'ADMIN';
  @Input() currentTheme: 'light' | 'dark' = 'dark';

  @Output() menuItemClicked = new EventEmitter<string>();
  @Output() themeToggled = new EventEmitter<'light' | 'dark'>();

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.menuItems.length === 0) {
      this.menuItems = [
        { id: 'dashboard', icon: 'dashboard', label: 'Dashboard', active: false },
        { id: 'users', icon: 'people', label: 'Users', active: false },
        { id: 'reimbursement', icon: 'receipt', label: 'Reimbursement', active: true, hasNotification: true, notificationCount: 3 },
        { id: 'advances', icon: 'payments', label: 'Advances', active: false },
        { id: 'reports', icon: 'summarize', label: 'Reports', active: false },
        { id: 'analytics', icon: 'analytics', label: 'Analytics', active: false, hasNotification: true, notificationCount: 2 },
        { id: 'settings', icon: 'settings', label: 'Settings', active: false }
      ];
    }
    if (this.activeItemId) {
      this.setActiveItem(this.activeItemId);
    }
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  setActiveItem(itemId: string) {
    this.menuItems.forEach(item => {
      item.active = item.id === itemId;
    });
    this.menuItemClicked.emit(itemId);
    this.router.navigate([itemId]);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.themeToggled.emit(this.currentTheme);
  }
}
