// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor() {}

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  login(): void {
    // Giriş logikasını yerinə yetirin
    // Sadəlik üçün isLoggedIn-i true olaraq qeyd edirik
    this.isLoggedIn = true;
  }

  logout(): void {
    // Çıxış logikasını yerinə yetirin
    // Sadəlik üçün isLoggedIn-i false olaraq qeyd edirik
    this.isLoggedIn = false;
  }
}
