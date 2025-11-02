import { Component, signal } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('Tsangge');
  protected readonly showHeader = signal(true);

  constructor(private router: Router) {
    const hiddenRoutes = ['/login', '/register', '/forgot-password'];

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log('Current route:', event.urlAfterRedirects);
        const currentUrl = event.urlAfterRedirects;
        const shouldHide = hiddenRoutes.some((r) => currentUrl.includes(r));
        this.showHeader.set(!shouldHide);
      });
  }
}
