import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SignuplLoginComponent } from '../signupl-login/signupl-login.component';
import { ProductComponent } from '../product/product.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CartService } from '../../Services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterModule ,ProductComponent,RouterLink, RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent{
 loggedUser: any;
 cartItemCount: number = 0;
 constructor(private router: Router, private cartService: CartService){
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
 
 viewCart(){
  this.router.navigate(['/addtocart'])
 }
 onviewProduct(){
  debugger;
  this.router.navigate(['/products']);
 }
}
