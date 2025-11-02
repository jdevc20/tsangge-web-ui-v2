import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import { routes } from './app.routes';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // 🧩 Error & Zone setup (for performance)
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),

    // 🧭 Routing
    provideRouter(routes),

    // 🌐 Server hydration (for SSR or event replay)
    provideClientHydration(withEventReplay()),

    // ⚙️ HTTP client with Auth Interceptor
    provideHttpClient(withInterceptors([AuthInterceptor])),
  ],
};