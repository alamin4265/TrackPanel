import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SignuplLoginComponent } from '../signupl-login/signupl-login.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterModule ,ProductComponent,RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
 loggedUser: any;
 constructor(private router: Router){
    const loacalUser = localStorage.getItem('loggedUser');
    if(loacalUser != null){
      this.loggedUser =JSON.parse(loacalUser);
    }
 }
 onLogOut(){
  localStorage.removeItem('loggedUser');
  this.router.navigate(['/signup-login'])
 }
 viewProduct(){
  this.router.navigate(['/products'])
 }
 onviewProduct(){
  debugger;
  this.router.navigate(['/products']);
 }
}
