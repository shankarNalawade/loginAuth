import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Users: any = [];
  private loginUser: any = null;

  constructor() {
    this.Users = [
      {
        id: 1,
        email: 'shankar@gmail.com',
        password: 'Shankar@123',
        role: 'admin',
      },
      { id: 2, email: 'test@gmail.com', password: 'Test@123', role: 'user' },
    ];
  }

  // Validate login
  login(email: string, password: string): boolean {
    const user = this.Users.find(
      (user: any) => user.email === email && user.password === password
    );
    if (user) {
      this.loginUser = user;
      return true;
    } else {
      return false;
    }
  }
  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!this.loginUser;
  }

  // Get the current user’s role
  getUserRole(): string {
    return this.loginUser ? this.loginUser.role : null;
  }
}
