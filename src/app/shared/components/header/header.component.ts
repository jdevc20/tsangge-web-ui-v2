import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  appTitle = 'Tsangge Web UI';

  constructor(private router: Router) {}

  onLogout() {
    // Remove token or session data
    localStorage.removeItem('access_token');

    // Optionally notify or log action
    console.log('User logged out');

    // Redirect to login page
    this.router.navigateByUrl('/login');
  }
}
