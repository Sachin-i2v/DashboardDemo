import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // <-- Missing import
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatBadgeModule], // <-- Add MatInputModule here
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user = {
    name: 'Mayank S',
    avatar: 'assets/profile.jpg'
  };
  notificationCount = 5;
}
