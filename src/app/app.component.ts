import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  isWelcomePage(): boolean {
    return this.router.url === '/welcome';
  }
  isLoginPage(): boolean {
    return this.router.url === '/app/login';
  }
  isReg(): boolean {
    return this.router.url === '/app/register';
  }

  isExcludedPage(): boolean {
    const excludedRoutes = ['/welcome', '/login', '/register'];
    return excludedRoutes.includes(this.router.url);
  }
  
}