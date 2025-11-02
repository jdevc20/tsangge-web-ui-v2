import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/auth/auth.service'; // adjust path if needed

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  appTitle = 'ShopSmart';
  searchQuery = '';
  dropdownOpen = signal(false);
  darkMode = signal(false);

  // user comes from AuthService as a signal
  user = this.authService.user;
  isLoggedIn = () => !!this.user();

  constructor(private router: Router, private authService: AuthService) {}

  onSearch(query: string) {
    console.log('Search:', query);
  }

  toggleTheme() {
    this.darkMode.set(!this.darkMode());
    document.body.classList.toggle('dark-mode', this.darkMode());
  }

  toggleDropdown() {
    this.dropdownOpen.set(!this.dropdownOpen());
  }

  isDropdownOpen() {
    return this.dropdownOpen();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
