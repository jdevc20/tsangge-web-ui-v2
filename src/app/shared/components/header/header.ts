import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  appTitle = 'ShopSmart';
  searchQuery = '';
  private dropdownOpen = false;
  private darkMode = false;

  // Simulated authentication state
  isLoggedIn = false;
  username = 'John Dave';

  constructor(private router: Router) {}

  onSearch(query: string) {
    this.searchQuery = query;
    console.log('Search:', query);
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
  }

  isDarkMode() {
    return this.darkMode;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  isDropdownOpen() {
    return this.dropdownOpen;
  }

  onLogout() {
    this.isLoggedIn = false;
    this.dropdownOpen = false;
    this.router.navigate(['/login']);
  }

  // Simulate login (you’d normally call an auth service)
  login() {
    this.isLoggedIn = true;
    this.username = 'John Dave';
  }
}
