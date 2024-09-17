import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../Model/class';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice = 0;
  count : number=0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    debugger;
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
    this.count = this.cartService.getTotalCount();
  }

  checkout() { 
    if (this.cartItems.length > 0) {
      this.cartService.clearCart();
      // alert("checkout-success");
      this.router.navigate(['/checkout-success']);
    } else {
      console.error('No items in the cart for checkout.');
    }
  }
}