import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SignuplLoginComponent } from './Component/signupl-login/signupl-login.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LayoutComponent } from './Component/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,SignuplLoginComponent,LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // title = 'MixpanelIntegrationFrontend';
  isLoggedIn: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
    
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      debugger;
      // This will only run in the browser
      const loggedUser = localStorage.getItem('loggedUser');
      this.isLoggedIn = !!loggedUser;

      if (!this.isLoggedIn) {
        this.router.navigate(['/signup-login']);
      }
    }
  }
}
