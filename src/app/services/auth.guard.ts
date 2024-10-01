import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (next: ActivatedRouteSnapshot,state: RouterStateSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);
      // Check if the user is logged in
      if (!authService.isLoggedIn()) {
        router.navigate(['/login']); // Redirect to login if not authenticated
        return false;
      }

      // Check if the user has the 'admin' role
      const role = authService.getUserRole();
      if (role !== 'admin') {
        router.navigate(['/user']); // Redirect if not an admin
        return false;
      }

      return true;
}
