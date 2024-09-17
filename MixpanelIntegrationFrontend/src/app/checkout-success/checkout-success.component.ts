import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CartService } from '../Services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout-success',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.css']
})
export class CheckoutSuccessComponent {
  constructor(private cartService: CartService, private router: Router) {}
  processPayment() {

    console.log('Payment processing...');
    
  }
  onPayment(){
    alert("Payment-Success");
    this.router.navigate(['/products']);

  }
}
