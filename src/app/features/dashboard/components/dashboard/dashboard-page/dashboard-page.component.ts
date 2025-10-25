import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  template: `
    <section class="p-6">
      <h1 class="text-2xl font-bold mb-2">Tsangge Dashboard</h1>
      <p class="text-gray-600">Welcome to your Angular 20 standalone app 🚀</p>
    </section>
  `
})
export class DashboardPageComponent {}
