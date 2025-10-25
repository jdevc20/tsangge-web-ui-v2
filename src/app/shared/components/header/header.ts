import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  appTitle = 'Tsangge';
  isDropdownOpen = signal(false);
  isDarkMode = signal(false);
  searchQuery = '';

  constructor(private router: Router) { }

  toggleDropdown() {
    this.isDropdownOpen.update(v => !v);
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    document.body.classList.toggle('dark-theme', this.isDarkMode());
  }

  onLogout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login'], { replaceUrl: true });
  }


  onSearch(query: string) {
    this.searchQuery = query;
    console.log('Searching for:', query);
  }


}
