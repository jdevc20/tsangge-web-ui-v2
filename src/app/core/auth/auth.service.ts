import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

interface LoginResponse {
  user: {
    id: string;
    email: string;
    displayName: string;
    roles: string[];
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly API_URL =
    'https://hilitech-identity-service.onrender.com/v1/auth/login';

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  // Signal for reactive user state
  user = signal<any>(this.getStoredUser());

  constructor(private http: HttpClient) {}

  // ✅ Login API call
  async login(email: string, password: string): Promise<LoginResponse | null> {
    try {
      const response = await firstValueFrom(
        this.http.post<LoginResponse>(this.API_URL, { email, password })
      );

      if (this.isBrowser) {
        localStorage.setItem('accessToken', response.tokens.accessToken);
        localStorage.setItem('refreshToken', response.tokens.refreshToken);
        localStorage.setItem('user', JSON.stringify(response.user));
      }

      this.user.set(response.user);
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      return null;
    }
  }

  // ✅ Logout logic
  logout() {
    if (this.isBrowser) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    }
    this.user.set(null);
  }

  // ✅ Returns current user
  getUser() {
    return this.user();
  }

  // ✅ Reads stored user (browser only)
  private getStoredUser() {
    if (!this.isBrowser) return null; // prevent SSR crash
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // ✅ Auth check
  isAuthenticated(): boolean {
    if (!this.isBrowser) return false;
    return !!localStorage.getItem('accessToken');
  }
}
