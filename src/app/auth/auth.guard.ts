import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggedIn()) return true;
    this.router.navigate(['public'], { skipLocationChange: true });
  }

}
